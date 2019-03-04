'use strict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"],
		weeks = document.getElementById('weeks');
for(let i = 0; i < week.length; i++){
	if (i == 0){
		weeks.innerHTML += "<i>" + week[i] + "</i>" + "<br>";
	} else if (i < 5) {
		weeks.innerHTML += week[i] + "<br>";
	} else {
		weeks.innerHTML += "<b>" + week[i] + "</b>" + "<br>";
	}
}

let arr = [2111, 322, 43343, 5442, 655, 766, 877];

for(let i = 0; i < arr.length; i++){
	let numlen = arr[i].toString().length,
			n = 10 ** (numlen-1),
			first = Math.floor(arr[i] / n);
	if(first == 3 || first == 7){
		console.log(arr[i]);
	}
}