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
