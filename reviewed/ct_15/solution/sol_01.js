function sol(board) {
  const n = board.length;

  // 1) danger 여부를 저장할 2차원 배열 (처음에 모두 false)
  const dBoard = Array(n)
    .fill(null)
    .map(() => Array(n).fill(false));

  // 2) 지뢰 위치 찾기
  const mPosition = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 1) {
        mPosition.push([r, c]);
      }
    }
  }

  // 3) 모든 지뢰에 대해 주변 8칸 + 자기 자신을 true로 표시
  for (let i = 0; i < mPosition.length; i++) {
    const [r, c] = mPosition[i];
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
          dBoard[nr][nc] = true;
        }
      }
    }
  }

  // 4) 안전지역(= false) 카운팅
  let count = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (!dBoard[r][c]) count++;
    }
  }

  return count;
}

console.log(
  sol([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  sol([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
