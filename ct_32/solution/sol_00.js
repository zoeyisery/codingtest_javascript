function solution(numbers) {
  const dict = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let key in dict) {
    numbers = numbers.replaceAll(key, dict[key]);
  }
  console.log(numbers);

  return Number(numbers);
}

solution("onetwothreefourfivesixseveneightnine");
