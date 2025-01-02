function solution(n) {
  let fakeN = 3;
  let count = 3;
  let _n = 3;
  for (count = 3; count < 100; count++) {
    //fakeN++;
    //console.log("fakeN:", fakeN);
    //if (fakeN % 3 === 0) fakeN++;

    //if (fakeN % 10 === 3) fakeN++;

    while (fakeCount(fakeN)) {
      _n++;
    }

    console.log("count : fakeN", count, fakeN);
    if (count === n) break;
  }
  console.log(fakeN);
  return fakeN;
}

function fakeCount(n) {
  if (n % 3 === 0 || n % 10 === 3) return true;
  else return false;
}

solution(15);
