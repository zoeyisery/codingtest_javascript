function solution(array, n) {
  let answer = array[0];
  for (let i of array) {
    if (Math.abs(n - answer) > Math.abs(n - i)) {
      answer = i;
    } else if (Math.abs(n - answer) === Math.abs(n - i)) {
      answer = answer < i ? answer : i;
    }
  }
  console.log(answer);
  return answer;
}

solution([3, 10, 28], 20);
solution([10, 11, 12], 13);
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
solution([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 65);
