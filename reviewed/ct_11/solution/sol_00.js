function solution(s) {
  const _s = [...s];

  const sArray = _s.filter(function (item) {
    return item !== " ";
  });

  let sum = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === "Z") sArray.splice(i, 1, -sArray[i - 1]);
    else sArray[i] = parseInt(sArray[i], 10);
  }

  sArray.forEach(function (element) {
    sum += element;
  });

  return sum;
}
