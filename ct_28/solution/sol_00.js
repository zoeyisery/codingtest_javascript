function solution(box, n) {
  var answer = 0;
  answer =
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
  return answer;
}

solution([10, 8, 6], 3);
