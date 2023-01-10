#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include <queue>


// define class node for huffman codeing

class node_h {
public:

	char c;
	node_h * left;
	node_h *right ;

	node_h(node_h * l , node_h* r) {
		left = l ;
		right = r ;
	}

	node_h(char car) {
		c = car;
		left = NULL ;
		right = NULL;
	}

};

// function for finding code of any char

std::string find(char c , node_h* head) {
	if (head->left == NULL) {
		if (head->c == c) return "";
		return "2";
	}

	std::string ans;

	ans = find(c , head->left);

	if (ans != "2") return ("0" + ans);

	ans = find(c , head->right);

	if (ans != "2") return ("1" + ans);


	return "2";
}

// huffman function which take frequncy of chars and return code of all chars
std::vector<std::string> huffmanCode(unsigned long long freq[]) {


	auto comp = [](std::pair<unsigned long long , node_h*> l1 , std::pair< unsigned long long , node_h*> l2 ) {
		return (l1.first > l2.first);
	};

	std::priority_queue<std::pair<unsigned long long , node_h*> , std::vector<std::pair<unsigned long long , node_h*>> , decltype(comp) > pq(comp) ;
	std::pair<unsigned long long , node_h*> l1 , l2 ;



	for (unsigned long long i = 0 ; i < 256 ; i++) {
		if (freq[i])    pq.push({freq[i] , new node_h(i)});
	}

	while (pq.size() > 1) {
		l1 = pq.top();
		pq.pop();
		l2 = (pq.top());
		pq.pop();

		pq.push({l1.first + l2.first , new node_h(l1.second , l2.second)});


	}

	node_h * head = NULL;

	if (pq.size()) head = pq.top().second;

	// if frequncy of any char is 0 then thir code if -1 (this never use because that char never come)

	std::vector<std::string> code(256 , "-1");

	int unice = 0;
	int that = -1;

	for (int i = 0 ; i < 256 ; i++)
		if (freq[i]) {
			unice++;
			that = i;
			code[i] = find(i , head);
			// cout << i << " " << freq[i] << " " << code[i] << endl;
		}

// if unice is zero then their code according to upper code is null   so to change null -> 1

	if (unice == 1) {
		code[that] = "1";
	}

	return code;
}

// function to convert <= 8 bit binary string to int

int bToNum(std::string s , int size = 8) {

	int num = 0 ;

	int i = size;
	while (i--) {
		num <<= 1;
		num += (s[size - i - 1] - '0');
	}

	return num;
}


int main() {



	std::ifstream in("../text_files/main.txt");
	std::ofstream out("../text_files/main-compress.bin" , std::ios::binary);


	// main contains full file
	// extra for reading line by line

	std::string extra = "" , main = "";


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

	// std::cout << main << "\n";

	// Count frequency of all Characters in  freq array

	unsigned long long freq[256] = {0};


	for (char c : main) {
		freq[c]++;
	}

	// Call huffmanCode function for getting codes of all charecters

	std::vector<std::string> codes = huffmanCode(freq) ;

	// Print all codes in compress file

	// for (std::string x : codes) std::cout << x << " ";

	// for (int i = 0 ; i < 256 ; i++) std::cout << codes[i] << " ";

	for (int i = 0 ; i < 256 ; i++) out << codes[i] << " ";
	out << "\n";



	// store equvalent bits value in bit_line_code

	std::string bit_line_code = "" ;

	for (char c : main) {

		bit_line_code += codes[c];

	}

	// convert binary data to coded chars and store direct in compress file

	char c ;
	int size = bit_line_code.size();

	// std::cout << "hello\n" << bit_line_code;

	for (int i = 0 ; i < size - size % 8 ; i += 8) {

		c = bToNum(bit_line_code.substr(i , 8));

		out << c;
		// std::cout << c;
	}

	// check for last <8 bits and store it

	if (size % 8) {
		c = bToNum(bit_line_code.substr(size - size % 8 , size % 8) , size % 8);

		out <<  c ;
		// std::cout << c;
	}

	// store how many bits are important of last charecter

	out << (bit_line_code.size() % 8);
	// std::cout << (bit_line_code.size() % 8) << std::endl;


	// close output file

	out.close();

	return 0;
}
