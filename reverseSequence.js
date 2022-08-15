// Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.
// Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.

function reverseSequence(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

reverseSequence(5)
reverseSequence(7)