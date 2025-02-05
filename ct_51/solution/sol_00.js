function solution(bin1, bin2) {
  var answer = "";
  answer = tenToTwo(twoToTen(bin1) + twoToTen(bin2));
  console.log(answer);
  return answer;
}

function twoToTen(bin) {
  return parseInt(bin, 2);
}

function tenToTwo(num) {
  return num.toString(2);
}

solution("10", "11"); // should return "101"
solution("1001", "1111"); // should return "11000"
