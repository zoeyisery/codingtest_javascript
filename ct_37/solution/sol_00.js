function solution(A, B) {
  var answer = 0;
  if (A === B) return 0;

  for (let i = 1; i < A.length; i++) {
    A = A[A.length - 1] + A.slice(0, A.length - 1);
    if (A === B) return i;
  }
  return -1;
}

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));
