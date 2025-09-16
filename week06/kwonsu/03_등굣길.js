function solution(m, n, puddles) {
  const MOD = 1_000_000_007;

  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  for (const [col, row] of puddles) {
    dp[row][col] = -1;
  }

  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;

      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }

      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
    }
  }

  return dp[n][m];
}
