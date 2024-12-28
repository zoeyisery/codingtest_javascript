function solution(id_pw, db) {
  var answer = "";
  const [inputId, inputPw] = id_pw;

  for (const [dbId, dbPw] of db) {
    if (dbId === inputId) {
      if (dbPw === inputPw) return "login";
      return "wrong pw";
    }
  }

  return "fail";
}
