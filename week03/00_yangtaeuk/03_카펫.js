/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 *
 * [아이디어]
 * 1. brown과 yellow를 합친 수가 전체 칸의 수
 *  -> 예시 : 10,2라면 12칸이 전체 칸의 수
 * 2. 전체칸 수의 약수를 구한다
 *  -> 12라면 2x6, 3x4의 조합이 있을 수 있음.
 * 3. 각 케이스를 순회하면서 브라운, 옐로우 색상의 개수가 일치하는지 확인
 *  -> 확인법 : 3x4라면 총 테두리는(브라운) 10개임.
 *  -> 계산 방식 x길이 y길이를 더하고 곱하기 2를 한다음 4를 빼준다.
 *  ->-> x방향 위, 아래 길이를 더하고 y방향 왼,오를 더하고 각 꼭지점을 빼주는 것.
 */
function solution(brown, yellow) {
  // 아이디어 1번: 전체칸의 수
  const total = brown + yellow;
  const divisors = new Map(); // 중복 제거를 위해 map 사용
  // 아이디어 2번: 약수 구하기
  for (let divider = 2; divider < total / 2; divider++) {
    if (total % divider === 0) {
      const divideResult = total / divider;
      const [key, value] = (() => {
        if (divideResult >= divider) return [divideResult, divider];
        else return [divider, divideResult];
      })();

      divisors.set(key, value);
    }
  }
  // 아이디어 3번 : 조합의 브라운색깔, 옐로우 색깔 비교 및 리턴
  for (const [x, y] of divisors.entries()) {
    const brownCount = x * 2 + y * 2 - 4;
    const yellowCount = total - brownCount;
    if (brownCount === brown && yellowCount === yellow) return [x, y];
  }
}

const res1 = solution(10, 2); // [4,3]
const res2 = solution(8, 1); // [3,3]
const res3 = solution(24, 24); // [8,6]

console.log(res1);
console.log(res2);
console.log(res3);
