function solveEquation(a, b, c) {
  'use strict';
  // ********* Task1 *************** 
  let arr = [];
  let x1;
  let x2;
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d === 0) {
      x1 =  - b / (2 * a);
      arr.push(x1); // один корень
  };
    
  if (d > 0) {
      x1 = (- b + Math.sqrt(d))/(2 * a);
      x2 = (-b - Math.sqrt(d))/(2 * a);
      arr.push(x1, x2); // два корня
  }
  return arr; // array
}
  // ********************************

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict';
  let totalAmount;
  let percentNumb = parseFloat(percent);           // преобразование введённой процентной ставки в число
  let contributionNumb = parseFloat(contribution); // преобразование введённого первоначального взноса в число
  let amountNumb = parseFloat(amount);             // преобразование введённой суммы кредита в число

  // ********* Task2 *************** 
  if (((Number.isNaN(percentNumb) === true) || (String(parseInt(percent, 10)) !== String(percent))) || (percent <= 0))  { // обработка ошибки ввода, с проверкой на десятичное значение
    alert( `Параметр процентной ставки содержит неправильное значение ${percent} !` );
    return;
   };
   
   if (((Number.isNaN(amountNumb) === true) || (String(parseInt(amount, 10)) !== String(amount))) || (amount <= 0))  { // обработка ошибки ввода, с проверкой на десятичное значение
    alert( `Параметр первоначального взноса содержит неправильное значение ${amount} !` );
    return;
   };

   if (((Number.isNaN(contributionNumb) === true) || (String(parseInt(contribution, 10)) !== String(contribution))) || (contributionNumb >= amountNumb))  { // обработка ошибки ввода, с проверкой на десятичное значение
    alert( `Параметр первоначального взноса содержит неправильное значение ${contribution} !` );
    return;
   };

  let creditSum = amountNumb - contributionNumb; // тело кредита

  let nowDate = new Date();                                                                   // сегодняшняя дата в стандартном формате 'гггг-мм-дд'
  let fullMonthsInputedDate = date.getFullYear() * 12 + (1 + date.getMonth());                // количество полных месяцев от Рождества Христова до окончания кредита
  let fullMonthsNowDate = nowDate.getFullYear() * 12 + (1 + nowDate.getMonth());              // количество полных месяцев от Рождества Христова до сегодняшнего дня
  let payMonths = fullMonthsInputedDate - fullMonthsNowDate;                                  // количество полных месяцев на выплату кредита

  if (payMonths === 0) { // проверка введённой пользователем даты. Текущий месяц!
    alert( 'Указанная дата окончания выплат по кредиту не может быть определена в текущем месяце!' );
    return;
  };
  if (payMonths < 0) { // проверка введённой пользователем даты. Дата окончания в прошлом!
    alert( 'Указанная дата окончания выплат по кредиту не может быть определена в прошлом!' );
    return;
  };
  let p = percentNumb / 1200; // доля от процентной ставки
  let monthlyPayment = creditSum * (p + p / (Math.pow((1 + p), payMonths) - 1)); // ежемесячный платёж
  let totalAmountAccurate = monthlyPayment * payMonths; // общая сумма, которую придётся заплатить
  totalAmount = parseFloat(totalAmountAccurate.toFixed(2)); // "обрезка" результирующей суммы до копеек (двух знаков после запятой без округления) и преобразование в число

  console.log('Общая сумма, которую придётся заплатить: ', totalAmount); // вывод результата в консоль

  return totalAmount;
}
