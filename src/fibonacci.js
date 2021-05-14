// 1 1 2 3 5 8 13
// 0 1 2 3 4 5 6
// sumfibo(0) => 1
// sumfibo(1) => 2
// sumfibo(2) => 4

export function fibonacci(n) {
  if (n === 0 || n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function sumFibo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += fibonacci(i);
  }
  return sum;
}
