function solution(n) {
  let count = 0;
  let candidate = 0;

  while (count < n) {
    candidate++;

    if (candidate % 3 === 0 || String(candidate).includes("3")) {
      continue;
    }

    count++;
  }

  return candidate;
}
