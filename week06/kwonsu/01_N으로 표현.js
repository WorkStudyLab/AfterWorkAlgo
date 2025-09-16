// 아이디어
// 각 사용 횟수 (n = 문자를 n 번 사용)마다, 해당 사용 횟수로 만들 수 있는 값들을 저장
// 값을 저장할 땐 중복을 피하기 위해 Set 사용
// 각 사용 횟수마다 만들 수 있는 값들을 이전 사용 횟수에서 만들 수 있는 값들과 조합하여 만듦
// 예를 들어, 3번 사용(n=3)일 때는 (1,2), (2,1), (3,0)

function solution(N, number) {
  // 만약 N과 number가 처음부터 같다면 1 반환
  if (N === number) return 1;

  // 각 사용 횟수마다 만들 수 있는 값들을 저장할 배열
  // dp[i]는 N을 i번 사용하여 만들 수 있는 값들의 집합
  const dp = Array.from({ length: 9 }, () => new Set());

  // i는 N 사용 횟수. 1부터 8까지
  for (let i = 1; i <= 8; i++) {
    // 1. N을 i번 이어붙인 수를 먼저 추가
    dp[i].add(Number(String(N).repeat(i)));

    // 2. 이전에 계산된 dp 값들을 조합해 사칙연산 수행
    for (let j = 1; j < i; j++) {
      const set1 = dp[j];
      const set2 = dp[i - j];

      for (const num1 of set1) {
        for (const num2 of set2) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          // 0으로 나누기 방지
          if (num2 !== 0) {
            // 나눗셈은 몫만 취함
            dp[i].add(Math.floor(num1 / num2));
          }
        }
        // 3. 이번 횟수에서 만든 숫자들 중에 number가 있는지 확인
        if (dp[i].has(number)) {
          // number를 만들 수 있는 최소 횟수이므로 i 반환
          return i;
        }
      }
    }
  }
  // 1부터 8까지의 사용 횟수로도 number를 만들 수 없다면 -1 반환
  return -1;
}
