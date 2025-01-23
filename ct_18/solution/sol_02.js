function solution(numbers, k) {
  const count = numbers.length;
  let idx = 0;
  for (let i = 0; i < k - 1; i++) {
    idx = (idx + 2) % count;

    console.log(idx);
  }
  return numbers[idx];
}

solution([1, 2, 3, 4], 2);
