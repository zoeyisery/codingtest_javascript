function solution(numbers, k) {
  const count = numbers.length;
  let baller = 1;
  for (let i = 0; i < count; i++) {
    if (numbers[i] % 2 === 0) i++;

    baller = numbers[i];

    console.log(baller);
  }
}

solution([1, 2, 3, 4], 2);
