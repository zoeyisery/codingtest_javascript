function solution(polynomial) {
  let xCoeff = 0;
  let constSum = 0;

  const terms = polynomial.split(" + ");

  for (const term of terms) {
    if (term.includes("x")) {
      if (term === "x") {
        xCoeff += 1;
      } else {
        xCoeff += parseInt(term);
      }
    } else {
      constSum += parseInt(term);
    }
  }

  if (xCoeff === 0 && constSum === 0) {
    return "0";
  } else if (xCoeff === 0) {
    return String(constSum);
  } else if (constSum === 0) {
    if (xCoeff === 1) return "x";
    else return xCoeff + "x";
  } else {
    const xPart = xCoeff === 1 ? "x" : xCoeff + "x";
    return xPart + " + " + constSum;
  }
}
