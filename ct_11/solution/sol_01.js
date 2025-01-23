function solution(s) {
  const sArray = s.split(" ").filter((item) => item !== " "); // 공백 제거

  let sum = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === "Z") {
      sum -= parseInt(sArray[i - 1] || 0, 10); // 직전 숫자를 빼기
    } else {
      sum += parseInt(sArray[i], 10); // 숫자 더하기
    }
  }
  console.log(sum);
  return sum;
}
