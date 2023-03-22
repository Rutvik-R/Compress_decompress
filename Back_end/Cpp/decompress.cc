#include <iostream>
#include <cstring>
#include <string>
#include <fstream>
#include <vector>
#include <string>
#include <unordered_map>
#include <node.h>

// function which convert int to <=7 bit binary string
std::string numToB(int num, int i = 7)
{

	if (i == 0)
		i = 7;

	if (num < 0)
		num += 256;

	std::string ans = "";

	while (i--)
	{
		ans = char((num & 1) + '0') + ans;
		num >>= 1;
	}

	return ans;
}
// function which convert binary data to original text by help of their codes
std::string biLineToMainline(std::string biLine, std::vector<std::string> &codes)
{

	std::unordered_map<std::string, int> mp;

	for (int i = 0; i < 256; i++)
		mp[codes[i]] = i;

	std::string ss = "", main = "";

	for (char c : biLine)
	{

		ss += c;

		if (mp.find(ss) != mp.end())
		{
			main += (char)mp[ss];
			// cout << (char)mp[ss];
			ss = "";
		}
	}

	return main;
}

void Main(const v8::FunctionCallbackInfo<v8::Value> &args){

	v8::Isolate *isolate = args.GetIsolate();

	if(!args[0]->IsString()){
		isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Wrong arguments").ToLocalChecked()));
    return;

	}

	v8::String::Utf8Value str(isolate, args[0]);
	std::string main(*str);


	std::ifstream in("text_files/main-compress.bin", std::ios::binary);

	// Store all codes in codes vector

	std::vector<std::string> codes(256);

	for (int i = 0; i < 256; i++)
		in >> codes[i];

	// for (int i = 0 ; i < 256 ; i++) std::cout << codes[i] << " ";

	// take full coded text form compress file

	std::string codedFile = "", extra;

	getline(in, extra);

	// checking for new line accore ?

	bool check_first_time = true;

	while (getline(in, extra))
	{
		if (!check_first_time)
			codedFile += "\n";
		codedFile += extra;

		check_first_time = false;
	}

	int size = codedFile.size();

	// check for file (main file) is not empty

	std::string main_file = "";

	if (size > 1)
	{

		// convert coded text to binary form

		std::string binFile = "";

		for (int i = 0; i < size - 2; i++)
		{

			binFile += numToB(int(codedFile[i]));
		}

		// check for less then 7  last bits

		binFile += numToB(codedFile[size - 2], (codedFile[size - 1] - '0'));

		// convert binary text to original text by calling biLineToMainline function

		// std::cout << binFile << std::endl;

		

		main_file = biLineToMainline(binFile, codes);

		// print final (original) text in decompress file

		// out << main_file;
	}

	char * arr = new char [main_file.size()+1];
	std::strcpy(arr , main_file.c_str());

	v8::Local<v8::Context> context = isolate->GetCurrentContext();
  	v8::Local<v8::Object> obj = v8::Object::New(isolate);
   	v8::Local<v8::Value> argv[1] = {
    v8::String::NewFromUtf8( isolate, arr ).ToLocalChecked() };
 	obj->Set(context,
        	v8::String::NewFromUtf8(isolate,
                   "data").ToLocalChecked(),
                   argv[1]->ToString(context).ToLocalChecked())
           	.FromJust();

  args.GetReturnValue().Set(obj);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports , "main" , Main);
}

NODE_MODULE(addon , Initialize);

// while change run node-gyp configure build