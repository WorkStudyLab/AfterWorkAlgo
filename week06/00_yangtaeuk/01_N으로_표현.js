/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42895
 * [제한사항]
 *  - N은 1 이상 9 이하입니다.
 *  - number는 1 이상 32,000 이하입니다.
 *  - 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
 *  - 최솟값이 8보다 크면 -1을 return 합니다.
 *
 * [아이디어]
 * 1. dp 테이블 생성
 * 2. 숫자를 모두 이어붙인 케이스를 DP 테이블에 추가
 *  -> 5, 55, 555, 5555 ...
      [
        [],           [ 5 ],
        [ 55 ],       [ 555 ],
        [ 5555 ],     [ 55555 ],
        [ 555555 ],   [ 5555555 ],
        [ 55555555 ]
      ] 
 * 
 * 3. dp에 저장된 정보들 기반으로 다음 숫자를 조합
 *  - i를 2개 사용하는 경우 : dp[1]과 dp[1]을 조합 
 *    > [5]와 [5]를 조합 :  10, 25, 1, 0
 *  - i를 3개 사용하는 경우 : dp[1]과 dp[2]를 조합
 *    > [5]와 [55, 10, 0, 25, 1] 조합 : [
                                          555, 60, -50, 275,   0, 15, -5, 50, 0,  5,
                                            5,  0,  30, -20, 125,  0,  6,  4, 5,  5,
                                          60, 50, 275,  11,  15,  5, 50,  2, 5, -5,
                                            0,  0,  30,  20, 125,  5,  6, -4, 5,  0
                                        ]
 * 
 * 4. 중요한점
 *  - dp[4]를 계산할 때는 dp[1] op dp[3], dp[2] op dp[2], dp[3] op dp[1]은 세 케이스를 모두해야함. 
 *    => 빼기 연산과 나누기 연산 순서가 다를 경우 값이 달라짐 
 *      dp[1]의 아이템 5와 dp[3]의 아이템 555를 연산할 경우 빼기 연산을 할 경우 값이 다름 (555-5, 5-555)
 *      55 * 55의 경우 dp[2]와 dp[2]의 연산 할 경우에 나오게 되는 케이스 
 *  
 * 
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

  // 숫자를 조합
  // i : dp table 저장할 숫자

  for (let i = 2; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      const num1Arr = dp[j];
      const num2Arr = dp[i - j]; //3

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

const res1 = solution(5, 12); //4
console.log(res1);
// const res1 = solution(5, 5555); //4
// console.log(res1);
