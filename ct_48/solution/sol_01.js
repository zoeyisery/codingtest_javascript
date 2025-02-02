function solution(my_string) {
  // my_string 내의 연속된 숫자들을 배열로 추출
  const numbers = my_string.match(/\d+/g) || [];
  // 각 요소를 정수로 변환하고 모두 더함
  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}
