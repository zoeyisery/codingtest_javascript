function solution(keyinput, board) {
  let pos = [0, 0];
  for (const input of keyinput) {
    switch (input) {
      case "left":
        pos[0] -= 1;
        if (pos[0] >= board[0] / 2 || pos[0] <= -board[0] / 2) pos[0] += 1;
        break;
      case "right":
        pos[0] += 1;
        if (pos[0] >= board[0] / 2 || pos[0] <= -board[0] / 2) pos[0] -= 1;
        break;
      case "up":
        pos[1] += 1;
        if (pos[1] >= board[1] / 2 || pos[1] <= -board[1] / 2) pos[1] -= 1;
        break;
      case "down":
        pos[1] -= 1;
        if (pos[1] >= board[1] / 2 || pos[1] <= -board[1] / 2) pos[1] += 1;
        break;
    }

    console.log(pos);
  }
  return pos;
}

solution(["left", "right", "up", "right", "right"], [11, 11]);

solution(["down", "down", "down", "down", "down"], [7, 9]);
