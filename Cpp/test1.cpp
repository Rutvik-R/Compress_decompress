#include <iostream>
#include <fstream>
#include <vector>
#include <bitset>
#include <unordered_map>

using namespace std;

string numToB(int num , int i = 8) {

	// cout << num << " " << i << endl;

	if (i == 0) i = 8;

	if (num < 0) num += 256;

	string ans = "";

	while (i--) {
		ans = char((num & 1) + '0') + ans;
		num >>= 1;
	}

	return ans;

}

string biLineToMainline(string biLine , vector<string> &codes) {

	unordered_map<string , int> mp;

	for (int i = 0 ; i < 256 ; i++) mp[codes[i]] = i;
	// cout << " ***************** " << endl;

	// for (auto x : mp) cout << x.first << " " << x.second << " " << (char)x.second << endl;

	// cout << " ***************** " << endl;

	string ss = "" , main = "";

	// cout << biLine << endl;

	for (char c : biLine) {

		ss += c ;

		if (mp.find(ss) != mp.end()) {
			main += (char)mp[ss] ;
			// cout << (char)mp[ss];
			ss = "";
		}

	}

	return main;
}


int main() {

	ifstream in("../dummy_txt/dummy2-compress.bin" , ios::binary);
	ofstream out("../dummy_txt/dummy2-compress-decompress.txt");


	// Store all codes in codes vector

	vector<string> codes(256);

	for (int i = 0 ; i < 256 ; i++) in >> codes[i];



	// for (int i = 0 ; i < 256 ; i++) cout << codes[i] << endl;

	// take full coded text form compress file

	string codedFile = "" , extra;

	getline(in , extra);

	// checking for new line accore ?

	bool check_first_time = true;

	while (getline(in , extra)) {
		if (!check_first_time) codedFile += "\n";
		codedFile += extra ;

		check_first_time = false;
	}



	cout << codedFile;

	// check for file (main file) is not empty

	if (codedFile.size() != 1) {

		// convert coded text to binary form

		string binFile = "";

		for (int i = 0  ; i < codedFile.size() - 2 ; i++) {

			binFile += numToB(int(codedFile[i]));

		}

		// check for less then 8  last bits

		binFile += numToB(codedFile[codedFile.size() - 2] , (codedFile[codedFile.size() - 1] - '0'));

		// convert binary text to original text by calling biLineToMainline function

		string main_file = "";

		main_file = biLineToMainline(binFile , codes);

		// print final (original) text in decompress file

		out << main_file;
	}

	// close output file

	out.close();

	return 0;
}