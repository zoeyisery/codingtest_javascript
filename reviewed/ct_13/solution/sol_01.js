function solution(babbling) {
  const sounds = ["aya", "ye", "woo", "ma"];

  let count = 0;

  for (let word of babbling) {
    let temp = word;

    for (let sound of sounds) {
      temp = temp.replace(sound, " ");
      console.log("1:", temp);
    }

    temp = temp.replace(/\s/g, "");
    console.log("2:", temp);

    if (temp.length === 0) {
      count++;
    }
  }

  return count;
}

//console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
