'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''), 
		time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

function chooseReqExpenses(num) {
	for (let i = 0; i < num; i++) {
		let outlay = prompt("Введите обязательную статью расходов в этом месяце", ''),
				outlayCost = +prompt("Во сколько обойдется?", '');
	
		if (typeof(outlay) === 'string' && typeof(outlay) != null && typeof(outlayCost) != null && 
				outlay != '' && outlayCost != '' && outlay.length < 50 && outlay.length > 3) {
			appData.expenses[outlay] = outlayCost;
		} else {
			i--;
			alert("Данные введены неверно!", '');
		}
	}
}

function chooseOptExpenses(num) {
	for (let i = 0; i < num; i++) {
		let outlay = prompt("Статья необязательных расходов?", '');
	
		if (typeof(outlay) === 'string' && typeof(outlay) != null && 
				outlay != '' && outlay.length < 50 && outlay.length > 3) {
			appData.optionalExpenses[i+1] = outlay;
		} else {
			i--;
			alert("Данные введены неверно!", '');
		}
	}
}

function detectDayBudget() {
	appData.moneyPerDay = appData.budget / 30;
	alert("Ваш бюджет на день = " + appData.moneyPerDay);
}

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else {
		console.log("Высокий уровень достатка");
	}
}

chooseReqExpenses(2);
chooseOptExpenses(3);
detectLevel();
detectDayBudget();
console.log(appData);