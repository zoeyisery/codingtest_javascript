function solution(my_string) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === "+") {
      arr = my_string.split("+");
      answer = Number(arr[0]) + test(arr[1]);
    } else if (my_string[i] === "-") {
      arr = my_string.split("-");
      answer = Number(arr[0]) - test(arr[1]);
    }
  }
  console.log("a=", answer);

  return answer;
}

function test(strings) {
  let another = 0;
  let anoArr = [];
  for (let i of strings) {
    if (i === "+") {
      anoArr = strings.split("+");
      another = Number(anoArr[0]);
      break;
    } else if (i === "-") {
      anoArr = strings.split("-");
      another = Number(anoArr[0]);
      break;
    } else {
      another = Number(strings);
    }
  }
  console.log("ano=", another);
  return another;
}

solution("3+4-3");
