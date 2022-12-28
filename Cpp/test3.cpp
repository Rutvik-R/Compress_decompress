#include <bits/stdc++.h>

using namespace std;


int bToNum(string s) {

	int num = 0 ;
	int i = 8 ;

	while (i--) {
		num <<= 1;
		num += (s[8 - i - 1] - '0');
	}

	return num;
}


string numToB(int num) {

	string ans = "";

	int i = 8;

	while (i--) {
		ans = char((num & 1) + '0') + ans;
		num >>= 1;
	}

	return ans;
}


int main() {


	string s ;

	int num ;

	char c;

	string ans ;


	cin >> s;

	num = bToNum(s);

	cout << num << endl;

	c = num ;

	cout << c << endl;

	int num1 = c ;

	if (num1 < 0) num1 += 256;

	cout << num1 << endl;

	string final = numToB(num1);

	cout << final << endl;



	return 0;
}