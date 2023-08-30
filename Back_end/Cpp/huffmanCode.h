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
