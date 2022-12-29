const compress = require('./build/Release/compress');
const decompress = require('./build/Release/decompress');
function jsSum(a , b) {
	
    for (let i = 0 ; i < 1000000000 ; i++) a += b ;
    	
    let total  = a ;

	return total ;
}

// console.time('c++');
// let a = addon(121074188403234083728300);
let status = decompress(10);
console.log(status);
// console.timeEnd('c++');

// console.time('js');
// result = jsSum(10 , 20.2);
// console.log(result);
// console.timeEnd('js');