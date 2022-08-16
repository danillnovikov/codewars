// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.
//Write a program that will output the length of the Collatz Conjecture for any given n.

function collatz(n) {
    let count = 1

    while (n > 1) {
        count++
        if (n % 2) {
            n *= 3
            n += 1
        } else {
            n /= 2
        }

    }
    return console.log(count);

}

collatz(20);
collatz(17);
