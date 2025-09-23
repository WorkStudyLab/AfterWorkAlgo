function solution(n, results) {
  const win = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  for (const [a, b] of results) {
    win[a][b] = true; // a가 b를 이김
  }

  // 플루이드 워셜: A가 B를 이겻고 B가 C를 이겼으면 A가 C를 무조건 이김
  // 시간 복잡도: O(n³)
  // 정점 개수 n ≤ 100 이면 충분히 가능 (100³ = 1,000,000 = 연산 백만 정도).
  // BFS나 DFS로도 가능하며 어떤 경우 더 빠르기도 함
  // BFS나 DFS는 O(n + m) (m = 간선 수)
  for (let k = 1; k <= n; k++) {
    for (let a = 1; a <= n; a++) {
      if (!win[a][k]) continue;
      for (let b = 1; b <= n; b++) {
        if (win[k][b]) win[a][b] = true;
      }
    }
  }
  // 예시   [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
  //   [
  //     [ false, false, false, false, false, false ],
  //     [ false, false, true, false, false, true ],
  //     [ false, false, false, false, false, true ],
  //     [ false, false, true, false, false, true ],
  //     [ false, false, true, true, false, true ],
  //     [ false, false, false, false, false, false ]
  //   ]

  let answer = 0;

  // 각 선수 i에 대해, 이긴 수와 진 수를 센다.
  for (let i = 1; i <= n; i++) {
    let winCnt = 0;
    let loseCnt = 0;

    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (win[i][j]) winCnt++; // i가 j를 이김
      if (win[j][i]) loseCnt++; // j가 i를 이김
    }

    // 2번 선수를 예시로
    // 행 2: win[2][5] = true → winCnt = 1
    // 열 2: win[1][2] = true, win[3][2] = true, win[4][2] = true → loseCnt = 3
    // 합 = 1 + 3 = 4 (= n-1) → 순위 확정

    if (winCnt + loseCnt === n - 1) {
      answer++;
    }
  }

  return answer;
}
