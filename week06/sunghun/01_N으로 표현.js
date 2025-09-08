// https://zerosial.notion.site/268bde1e30c0805f8200d271eff354f1?pvs=73 해설
function solution(N, number) {
  // dp[i] : N을 i번 사용해서 만들 수 있는 모든 수의 집합 (1-indexed)
  const dp = Array.from({ length: 9 }, () => new Set());

  // i개 붙여쓰기 값 미리 생성 (예: N=5 → 5, 55, 555, ...)
  const concat = (n, times) => Number(String(n).repeat(times));

  // 나누기 처리 함수 (소수점 버리기, 0으로 나누기 방지)
  const intDiv = (a, b) => {
    if (b === 0) return null;
    return Math.trunc(a / b);
  };

  for (let i = 1; i <= 8; i++) {
    // 1) 붙여쓰기로 생성되는 값 추가
    dp[i].add(concat(N, i));

    // 2) 분할 조합: i = j + (i-j)
    for (let j = 1; j < i; j++) {
      const aSet = dp[j];
      const bSet = dp[i - j];

      for (const a of aSet) {
        for (const b of bSet) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(b - a);
          dp[i].add(a * b);

          const ab = intDiv(a, b);
          if (ab !== null) dp[i].add(ab);

          const ba = intDiv(b, a);
          if (ba !== null) dp[i].add(ba);
        }
      }
    }

    if (dp[i].has(number)) return i;
  }

  return -1;
}
