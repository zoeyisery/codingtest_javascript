function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  answer = addFraction(numer1, denom1, numer2, denom2);
  answer = reduceFraction(answer[0], answer[1]);
  console.log(answer);
  return answer;
}

function addFraction(numer1, denom1, numer2, denom2) {
  const numerator = numer1 * denom2 + numer2 * denom1;
  const denominator = denom1 * denom2;
  return [numerator, denominator];
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function reduceFraction(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

solution(1, 2, 3, 4);
