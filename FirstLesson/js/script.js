'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''), 
		time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
	chooseReqExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let outlay = prompt("Введите обязательную статью расходов в этом месяце", ''),
					outlayCost = +prompt("Во сколько обойдется?", '');
		
			if (typeof(outlay) === 'string' && 
					typeof(outlay) != null && 
					typeof(outlayCost) != null && 
					outlay != '' && 
					outlayCost != '' && 
					outlay.length < 50 && 
					outlay.length > 3) {
				appData.expenses[outlay] = outlayCost;
			} else {
				i--;
				alert("Данные введены неверно!", '');
			}
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let outlay = prompt("Статья необязательных расходов?", '');
		
			if (typeof(outlay) === 'string' && 
					typeof(outlay) != null && 
					outlay != '' && 
					outlay.length < 50 && 
					outlay.length > 3) {
				appData.optionalExpenses[i+1] = outlay;
			} else {
				i--;
				alert("Данные введены неверно!", '');
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = appData.budget / 30;
		alert("Ваш бюджет на день = " + appData.moneyPerDay);
	}, 
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else {
			console.log("Высокий уровень достатка");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?', ''),
					percent = +prompt('Под какой процент?', '');
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Через запятую)', '');
		if(typeof(items) === 'string' && typeof(items) != null && items != ''){
			appData.income = items.split(', ');
		} else {
			while(items == ''){
				items = prompt('Что принесет дополнительный доход? (Через запятую)', '');
			}
			appData.income = items.split(', ');
		}
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();

		let sposoby = 'Способы доп. заработка: \n';
		appData.income.forEach(function(item, i) {
			sposoby += (i+1) + ': ' + item + '\n';
		});
		alert(sposoby);
	}
};
appData.chooseIncome();

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
	console.log(key + ': ' + appData[key] + ';');
}
console.log(appData);