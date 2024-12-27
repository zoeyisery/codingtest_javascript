function solution(s) {
  const _s = [...s];
  console.log("_s = ", _s);
  const sArray = _s.filter(function (item) {
    return item !== " ";
  });
  console.log("_s = ", _s);
  console.log("sArray = ", sArray);

  let sum = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === "Z") sArray.splice(i, 1, -sArray[i - 1]);
    else sArray[i] = parseInt(sArray[i], 10);
  }

  console.log("sArray = ", sArray);

  sArray.forEach(function (element) {
    sum += element;
  });

  console.log(sum);

  return sum;
}

solution("1 2 Z 3");
solution("10 Z 20 Z");
