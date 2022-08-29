function fib(n) {
  let str = '';
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    return '';
  }

  let prev = 0,
    next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next = prev + next;
    str += ' ' + prev;
    prev = temp;
  }
  return str.trim();
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
