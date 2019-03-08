let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    reqValue = document.getElementsByClassName('expenses-value')[0],
    optValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    reqInputs = document.getElementsByClassName('expenses-item'),
    reqAccept = document.getElementsByTagName('button')[0],
    optInputs = document.querySelectorAll('.optionalexpenses-item'),
    optAccept = document.getElementsByTagName('button')[1],

    dayAccept = document.getElementsByTagName('button')[2],
    income = document.getElementById('income'),
    savings = document.getElementById('savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    numInputs = [reqInputs[1], reqInputs[3]];

let money, time;

startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет?", '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();

  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});

reqAccept.addEventListener('click', function() {
  let t = 0;
  for (let j = 0; j < reqInputs.length; j++) {
    if (reqInputs[j].value == '') {
      t++;
    }
  }
  if (t == 0) {
    let total = 0;
    for (let i = 0; i < reqInputs.length; i++) {
      let outlay = reqInputs[i].value,
        outlayCost = reqInputs[++i].value;
      appData.expenses[outlay] = outlayCost;
      total += +outlayCost;
    }
    reqValue.textContent = total;
    appData.reqTotal = total;
  }
});
optAccept.addEventListener('click', function() {
  let t = 0;
  for (let j = 0; j < optInputs.length; j++) {
    if (optInputs[j].value == '') {
      t++;
    }
  }
  if (t == 0) {
    optValue.textContent = '';
    for (let i = 0; i < optInputs.length; i++) {
      let outlay = optInputs[i].value;
      appData.optionalExpenses[i] = outlay;
      optValue.textContent += appData.optionalExpenses[i] + ' ';
    }
  }
});

dayAccept.addEventListener('click', function() {
  if(appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget-appData.reqTotal) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else {
      levelValue.textContent = "Высокий уровень достатка";
    }
  }
});

income.addEventListener('input', function() {
  let items = income.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

sumValue.setAttribute("disabled", "true");
percentValue.setAttribute("disabled", "true");
savings.addEventListener('click', function() {
  if (appData.savings == true){
    appData.savings = false;
    sumValue.setAttribute("disabled", "true");
    percentValue.setAttribute("disabled", "true");
  } else {
    appData.savings = true;
    sumValue.removeAttribute("disabled");
    percentValue.removeAttribute("disabled");
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    if (appData.savings == true) {
      let sum = +sumValue.value,
          percent = +percentValue.value;
      appData.monthIncome = sum/100/12*percent;
      appData.yearIncome = sum/100*percent;
  
      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
  }
});

optInputs.forEach(function(item) {
  item.addEventListener('keypress', function() {
    var that = this;
    setTimeout(function() {
        var res = /[^а-я ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
  }, false);
});

numInputs.forEach(function(item) {
  item.addEventListener('keypress', function() {
    var that = this;
    setTimeout(function() {
        var res = /[^\d ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
  }, false);
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};