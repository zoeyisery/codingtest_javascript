function solution(my_string) {
  var answer = "";
  let obj = {};

  for (s of my_string) {
    if (obj[s]) {
      continue;
    } else {
      obj[s] = true;
      answer += s;
    }
  }
  //console.log(answer);
  return answer;
}

solution("people");
solution("We are the world");
