/*function solution(my_string, k) {
  var answer = '';
  
  let input = [];

  for(int i = 1; i <= k; k++){
      input.push(my_string);
  }
  
  answer = input.join('');

  return answer;
}

console.log(answer);*/

function solution(my_string, k) {
  var answer = "";

  let input = [];

  for (let i = 1; i <= k; i++) {
    input.push(my_string);
  }

  answer = input.join("");
  console.log(answer);

  return answer;
}

//최적화 제안 : Array.prototype.join과 for 루프를 사용할 필요 없이,
//문자열 반복은 간단히 String.prototype.repeat을 사용하여 처리할 수 있습니다.
