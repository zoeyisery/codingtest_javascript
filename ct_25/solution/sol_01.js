function solution(s) {
  let answer = "";
  let count = [];
  for (const ch of s) {
    if (!count[ch]) count[ch] = 0;
    count[ch]++;
  }

  const onceChars = [];
  for (const ch of s) {
    if (count[ch] === 1) onceChars.push(ch);
  }

  answer = onceChars.sort().join("");

  console.log(answer);
  return answer;
}

solution("abdc");
