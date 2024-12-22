function solution(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}
