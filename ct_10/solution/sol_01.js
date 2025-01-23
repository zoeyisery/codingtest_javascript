function solution(num_list, n) {
  //var answer = [[]];
  const rowCount = Math.ceil(num_list.length / n);
  const arr = new Array(rowCount);

  for (var i = 0; i < rowCount; i++) {
    arr[i] = num_list.slice(i * n, i * n + n);
  }

  return arr;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 4);
//var arr = solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
//console.log(arr);
