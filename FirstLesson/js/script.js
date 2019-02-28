'use strict';

let money = +prompt("Ваш бюджет на месяц?"), 
		time = prompt("Введите дату в формате YYYY-MM-DD"),
		outlay = prompt("Введите обязательную статью расходов в этом месяце"),
		outlayCost = +prompt("Во сколько обойдется?"),
		outlay2 = prompt("Введите обязательную статью расходов в этом месяце"),
		outlayCost2 = +prompt("Во сколько обойдется?");

let appData = {
	budget: money,
	timeData: time,
	expenses: {
		[outlay]: outlayCost,
		[outlay2]: outlayCost2
	},
	optionalExpenses: "",
	income: "",
	savings: false
};
console.log(appData);
alert("Ваш бюджет на день = " + (+appData.budget / 30));
