#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <unordered_map>



// function which convert int to <=7 bit binary string
std::string numToB(int num , int i = 7) {

	if (i == 0) i = 7;

	if (num < 0) num += 256;

	std::string ans = "";

	while (i--) {
		ans = char((num & 1) + '0') + ans;
		num >>= 1;
	}

	return ans;

}
// function which convert binary data to original text by help of their codes
std::string biLineToMainline(std::string &biLine , std::vector<std::string> &codes) {

	std::unordered_map<std::string , int> mp;

	for (int i = 0 ; i < 256 ; i++) mp[codes[i]] = i;

	bool check = (mp.size() == 1);

	std::string ss = "" , main = "";

	for (char c : biLine) {

		ss += c ;

		if((check || ss != "") && mp.find(ss) != mp.end()) {
			main += (char)mp[ss] ;
			// cout << (char)mp[ss];
			ss = "";
		}

	}

	return main;
}


int Main() {


	std::ifstream in("../text_files/main-compress.bin" , std::ios::binary);
	std::ofstream out("../text_files/main-compress-decompress.txt");


	// Store all codes in codes vector

	std::vector<std::string> codes(256);

	// for (int i = 0 ; i < 256 ; i++) in >> codes[i];



	// for (int i = 0 ; i < 256 ; i++) std::cout << codes[i] << " ";

	// take full coded text form compress file

	std::string codedFile = "" , extra , code;
	int size;
	char c;
	
	for(int i=0 ; i < 256 ; i++){
		
		in >> size;
		if(size == -1) {codes[i] = "-1"; continue;}
		code = "";
		while(code.size() <= size) {
			if(code.size()) code += '\n';
			getline(in , extra);
			code += extra;
		}

		// std::cout<<code<<" ";
		
		code.erase(code.begin());

		codes[i] = "";

		for(int j=0 ; j<code.size()-2 ; j++) codes[i] += numToB(int(code[j]));
		codes[i] += numToB(int(code[code.size()-2]) , code.back() - '0');

		std::cout<<codes[i]<<" "<<size<<" "<<code<<"\n";
	}
	// std::cout<<std::endl;
	// for(int i=0 ; i< 256 ; i++) std::cout<<codes[i]<<" ";
	getline(in , extra);
	// checking for new line accore ?

	bool check_first_time = true;

	while (getline(in , extra)) {
		if (!check_first_time) codedFile += "\n";
		codedFile += extra ;

		check_first_time = false;
	}


	size = codedFile.size();

	// check for file (main file) is not empty

	if (size > 1) {

		// convert coded text to binary form

		std::string binFile = "";

		for (int i = 0  ; i < size - 2 ; i++) {

			binFile += numToB(int(codedFile[i]));

		}

		// check for less then 7  last bits

		binFile += numToB(codedFile[size - 2] , (codedFile[size - 1] - '0'));

		// convert binary text to original text by calling biLineToMainline function

		// std::cout << binFile << std::endl;

		std::string main_file = "";

		main_file = biLineToMainline(binFile , codes);

		// print final (original) text in decompress file
		
		std::cout<<main_file<<"\n";

		out << main_file;
	}

	// close output file

	out.close();

	return 1;

}

int main(){

	Main();

	return 0;
}