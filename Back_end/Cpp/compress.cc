#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include <node_api.h>
#include "huffmanCode.h"


// function to convert <= 7 bit binary string to int

int bToNum(std::string &s , int size = 7) {

	int num = 0 ;

	int i = size;
	while (i--) {
		num <<= 1;
		num += (s[size - i - 1] - '0');
	}

	return num;
}


napi_value Main(napi_env env , napi_callback_info info) {

	size_t argc = 1;
	napi_value args[1];
	napi_value output ;

	napi_get_cb_info(env , info , &argc , args, NULL , NULL);
	napi_create_double(env , 1 , &output);



	std::ifstream in("text_files/main.txt");
	std::ofstream out("text_files/main-compress.bin" , std::ios::binary);


	// main contains full file
	// extra for reading line by line

	std::string extra = "" , main = "";
	char c ;

	// Reading tex from file linne by line

	// checking for new line accore ?
	bool check_first_time = true;

	while (!in.eof()) {
		getline(in , extra);
		if (!check_first_time) main += "\n";
		main += extra ;

		check_first_time = false;
	}

	// Reading end now close in file
	in.close();


	// Count frequency of all Characters in  freq array
	unsigned long long freq[256] = {0};

	int total = 0;

	for (char c : main)	{freq[c]++; if(freq[c] == 1) total++;}

	out<<total<<" ";
	for(int i=1 ; i<256 ; i++) if(freq[i]) {
		out<<i<<" "<<freq[i];
		total--;
		if(total) out<<" ";
		else out<<"\n";
	}

	// Call huffmanCode function for getting codes of all charecters
	std::vector<std::string> codes = huffmanCode(freq) ;

	// store equvalent bits value in bit_line_code
	std::string bit_line_code = "" ;
	for (char c : main)	bit_line_code += codes[c];


	// convert binary data to coded chars and store direct in compress file
	int size = bit_line_code.size();

	for (int i = 0 ; i < size - size % 7 ; i += 7) {
		c = bToNum(bit_line_code.substr(i , 7));
		out << c;
	}

	// check for last <7 bits and store it
	if (size % 7) {
		c = bToNum(bit_line_code.substr(size - size % 7 , size % 7) , size % 7);

		out <<  c ;
	}

	// store how many bits are important of last charecter
	out << (bit_line_code.size() % 7);

	// close output file
	out.close();


	napi_create_double(env , 0 , &output);


	return output;

}




napi_value init(napi_env env, napi_value exports) {

	napi_value status ;

	napi_create_function(env , nullptr , 0 , Main , nullptr , &status );

	return status;
}

NAPI_MODULE( NODE_GYP_MODULE_NAME , init);



// while change run node-gyp configure build