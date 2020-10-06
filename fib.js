//In order to get the right shirt we really need to know what the 40th number in the fibonacci sequence is.
const fib = (n) => n == 0 || n == 1 ? 1 : fib(n - 1) + fib(n - 2);
console.log(fib(40));