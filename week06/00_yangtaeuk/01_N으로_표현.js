/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42895
 * [제한사항]
 *  - N은 1 이상 9 이하입니다.
 *  - number는 1 이상 32,000 이하입니다.
 *  - 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
 *  - 최솟값이 8보다 크면 -1을 return 합니다.
 */

function solution(N, number) {
  var answer = 0;
  const dp = new Array(9).fill(null).map(() => []);
  if (N === number) return 1;
  // 1~8까지 숫자 이어 붙인 케이스 추가
  // => 5, 55, 555 ...
  for (let i = 1; i <= 8; i++) {
    const num = new Array(i).fill(N).join("");
    dp[i].push(parseInt(num));
  }

  // dp[j]와 dp[i-j]의 숫자를 조합
  // i=2, j=1이라면 dp[1] op dp[1]
  // i=3, j=1이라면 dp[1] op dp[2]
  for (let i = 2; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      const num1Arr = dp[j];
      const num2Arr = dp[i - j];
      for (let num1Idx = 0; num1Idx < num1Arr.length; num1Idx++) {
        for (let num2Idx = 0; num2Idx < num2Arr.length; num2Idx++) {
          const num1 = num1Arr[num1Idx];
          const num2 = num2Arr[num2Idx];

          if (num1 === number) return j;
          if (num2 === number) return i - j;

          const add = num1 + num2;
          const sub = num1 - num2;
          const div = Math.floor(num1 / num2);
          const mul = Math.round(num1 * num2);

          if ([add, sub, div, mul].some((item) => item === number)) {
            return i;
          }
          dp[i].push(add);
          dp[i].push(sub);
          dp[i].push(mul);
          if (num2 !== 0) {
            dp[i].push(div);
          }
        }
      }
    }
  }

  return -1;
}

const res1 = solution(5, 3025); //4
console.log(res1);
// const res1 = solution(5, 5555); //4
// console.log(res1);
