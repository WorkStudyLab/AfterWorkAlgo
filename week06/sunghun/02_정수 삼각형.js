function solution(triangle) {
  const n = triangle.length;
  // 마지막 행 복사로 시작
  let dp = triangle[n - 1].slice();
  for (let i = n - 2; i >= 0; i--) {
    const next = new Array(i + 1);
    for (let j = 0; j <= i; j++) {
      next[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
    }
    dp = next;
  }
  return dp[0];
}
