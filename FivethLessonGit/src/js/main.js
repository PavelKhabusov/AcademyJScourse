let start = document.getElementById('start'),
    valuable = document.querySelectorAll("[class*='-value']"),
    reqInputs = document.querySelectorAll('.expenses-item'),
    optInputs = document.querySelectorAll('.optionalexpenses-item'),
    reqAccept = document.querySelector('button.expenses-item-btn'),
    optAccept = document.querySelector('button.optionalexpenses-btn'),
    dayAccept = document.querySelector('button.count-budget-btn'),
    maybe = document.querySelector('#income'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
