function solution(num_list) {
  var answer = 0;
  let list_Length = num_list.length;
  //nodeToArray = num_list.toArray();
  // 배열은 리스트와 유사한 역할을 하지만 javascript에서는 배열이 리스트의 역할을 함
  //그러므로 이 과정이 필요 없음

  if (list_Length <= 10) {
    answer = 1;
    num_list.forEach((element) => {
      answer *= element;
    });
  } else {
    num_list.forEach((element) => {
      answer += element;
    });
  }

  return answer;
}
