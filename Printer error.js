// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые названы буквами от a до m.
// Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» управляющая строка будет 'aaabbbbhaijjjm',
// что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a ...
// Иногда возникают проблемы: возникает недостаток цветов, техническая неисправность и «плохая» контрольная строка, например 'aaaxbbbbyyhwawiwjjjwwm' с буквами не от а до м.
// Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде строки, представляющей рациональное число,
// числитель которого равен числу ошибок, а знаменатель - длине управляющей строки. Не уменьшайте эту дробь до более простого выражения.
// Строка имеет длину, большую или равную единице, и содержит только буквы от a до z.


function printerError(str) {

    let err = str.split('').reduce((a, b) => b > 'm' ? a + 1 : a, 0)

    return `${err}/${str.length}`
}

console.log(printerError('aaabbbbhaijjjm'));
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));