'use strict';

let str = "урок-3-был слишком легким",
		arr = [20, 33, 1, "Человек", 2, 3], sum = 0;

str = str[0].toUpperCase() + str.slice(1);
for(let i = 0; i < str.length; i++){
	if(str[i]=="-"){
		str = str.split('');
		str[i] = ' ';
		str = str.join('');
	}
}
str = str.replace('легким','легко');
console.log(str);

for(let i = 0; i<arr.length; i++){
	if(typeof(arr[i]) == 'string'){
		arr.splice(i, 1);
	}
	sum += Math.pow(arr[i], 3);
}
console.log(sum*sum);
console.log(arr);

function unoArgumento (strings) {
	if(typeof(strings) != 'string'){
		console.log("Error!");
	} else {
		for(let i = 0; i < strings.length; i++){
			if(strings[0]==" "){
				strings = strings.split('');
				strings[0] = '';
				strings = strings.join('');
			} 
			if(strings[strings.length-1]==" "){
				strings = strings.split('');
				strings[strings.length-1] = '';
				strings = strings.join('');
			}
		}
		if(strings.length > 50){
			strings = strings.slice(0, 50);
			strings += "...";
		}
		console.log(strings);
	}
}
unoArgumento(prompt("Введите строку"));