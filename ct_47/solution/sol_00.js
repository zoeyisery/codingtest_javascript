function solution(array) {
  var answer = 0;
  for (let i of array) {
    let str = i.toString();
    for (let j of str) {
      if (j === "7") {
        answer++;
      }
    }
  }

  return answer;
}
