

#include <iostream>
#include <fstream>

using namespace std;

int main(){
	
	
	ifstream in("s1.txt");
	ofstream out("s2.txt");
	
	string s = "Hello good night";
	
	getline(in , s);
	
	out<<s;
	
	cout<<s<<endl;
	
	return 0;
}
