function solution(m, n, puddles) {
  const MOD = 1_000_000_007;
  const blocked = Array.from({ length: n + 1 }, () =>
    new Array(m + 1).fill(false)
  );
  for (const [px, py] of puddles) {
    blocked[py][px] = true;
  }

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  dp[1][1] = 1;

  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= m; x++) {
      if (y === 1 && x === 1) continue; // 시작점 제외
      if (blocked[y][x]) {
        dp[y][x] = 0; // 물웅덩이
      } else {
        dp[y][x] = (dp[y - 1][x] + dp[y][x - 1]) % MOD;
      }
    }
  }

  return dp[n][m];
}
