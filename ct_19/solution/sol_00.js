function solution(age) {
  let strAge = String(age);
  strAge = [...strAge];
  console.log(strAge);

  let realAge = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = [...alphabet];

  strAge.forEach(function (element) {
    realAge += alphabet[parseInt(element)];
  });

  return realAge;
}
