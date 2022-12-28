#include <iostream>
#include <fstream>
#include <vector>
#include <queue>

using namespace std;

// define class node for huffman codeing

class node {
public:

	char c;
	node * left;
	node *right ;

	node(node * l , node* r) {
		left = l ;
		right = r ;
	}

	node(char car) {
		c = car;
		left = NULL ;
		right = NULL;
	}

};

// function for finding code of any char

string find(char c , node* head) {
	if (head->left == NULL) {
		if (head->c == c) return "";
		return "2";
	}

	string ans;

	ans = find(c , head->left);

	if (ans != "2") return ("0" + ans);

	ans = find(c , head->right);

	if (ans != "2") return ("1" + ans);


	return "2";
}

// huffman function which take frequncy of chars and return code of all chars
vector<string> huffmanCode(unsigned long long freq[]) {


	auto comp = [](pair<unsigned long long , node*> l1 , pair< unsigned long long , node*> l2 ) {
		return (l1.first > l2.first);
	};

	priority_queue<pair<unsigned long long , node*> , vector<pair<unsigned long long , node*>> , decltype(comp) > pq(comp) ;
	pair<unsigned long long , node*> l1 , l2 ;


	for (unsigned long long i = 0 ; i < 256 ; i++) {
		if (freq[i])    pq.push({freq[i] , new node(i)});
	}

	while (pq.size() > 1) {
		l1 = pq.top();
		pq.pop();
		l2 = (pq.top());
		pq.pop();

		pq.push({l1.first + l2.first , new node(l1.second , l2.second)});


	}

	node * head = pq.top().second;

	// if frequncy of any char is 0 then thir code if -1 (this never use because that char never come)

	vector<string> code(256 , "-1");

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

int bToNum(string s , int size = 8) {

	int num = 0 ;

	int i = size;
	while (i--) {
		num <<= 1;
		num += (s[size - i - 1] - '0');
	}

	return num;
}



int main() {

	ifstream in("../dummy_txt/test3.txt");
	ofstream out("../dummy_txt/test3-compress.bin" , ios::binary);

	// main contains full file
	// extra for reading line by line

	string extra = "" , main = "";


	// Reading tex from file linne by line

	// checking for new line accore ?
	bool check_first_time = true;

	while (getline(in , extra)) {
		if (!check_first_time) main += "\n";
		main += extra ;

		check_first_time = false;
	}

	// Reading end now close in file

	in.close();

	// Count frequency of all Characters in  freq array

	unsigned long long freq[256] = {0};


	for (char c : main) {
		freq[c]++;
	}

	// Call huffmanCode function for getting codes of all charecters

	vector<string> codes = huffmanCode(freq) ;

	// Print all codes in compress file

	for (int i = 0 ; i < 256 ; i++) out << codes[i] << " ";
	out << "\n";



	// store equvalent bits value in bit_line_code

	string bit_line_code = "" ;

	for (char c : main) {

		bit_line_code += codes[c];

	}

	// convert binary data to coded chars and store direct in compress file

	char c ;
	int size = bit_line_code.size();

	for (int i = 0 ; i < size - size % 8 ; i += 8) {

		c = bToNum(bit_line_code.substr(i , 8));

		out << c;
	}

	// check for last <8 bits and store it

	if (size % 8) {
		c = bToNum(bit_line_code.substr(size - size % 8 , size % 8) , size % 8);

		out <<  c ;
	}

	// store how many bits are important of last charecter

	out << (bit_line_code.size() % 8) << endl;

	// close output file

	out.close();

	return 0;
}