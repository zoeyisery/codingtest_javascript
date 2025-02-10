function sol(board) {
  const n = board.length;
  const dBoard = [];
  let d = dBoard.length;
  const mPosition = [];

  let count = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 1) {
        mPosition.push([r, c]);
      }
    }
  }

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nr = mPosition[0][0] + dr;
      const nc = mPosition[0][1] + dc;

      console.log(nr, nc);

      if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
        dBoard[nr][nc] = true;
      } else dBoard[nr][nc] = false;
    }
  }

  for (let sr = 0; sr < d; sr++) {
    for (let sc = 0; sc < d; sc++) {
      if (dBoard[sr][sc] === false) count++;
    }
  }

  //console.log(mPosition);
  return count;
}
