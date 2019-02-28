'use strict';

let num = 33721,
		multiply = 1,
		n = 10;

for(var i = 0; i < 5; i++){
	multiply *= Math.floor(num % n);
	num /= 10;
}
console.log(multiply);
multiply **= 3;
console.log(multiply);
alert(multiply % 100);