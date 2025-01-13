function solution(box, n) {
  var answer = 0;
  answer =
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
  console.log(Math.floor(box[0] / n));
  console.log(Math.floor(box[1] / n));
  console.log(Math.floor(box[2] / n));
  console.log(answer);
  return answer;
}

solution([10, 8, 6], 3);
