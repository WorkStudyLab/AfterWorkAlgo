/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * 3년전의 내가 풀은 문제라 해석하기가 어려웠음.
 *
 * [아이디어]
 * 1. 모든 +,- 케이스를 다 체크한다.
 * 2. 케이스별로 모두 더해준다.
 * 3. target과 값이 같다면 카운트해준다.
 *
 * [모든 +- 체크하기]
 * 1. i는 0부터 maxCount까지 순회한다.(길이가 5인 배열이라면 32번) 2 ** 5 => 2의 5제곱
 * 2. i를 2진수로 변환한다.
 *    - i가 0이라면 00000
 *    - i가 31이라면 11111
 * 3. 2번의 작업을 통해 얻은 2진수로 부호를 얻는다(+,-)
 *    - 0이면 -, 1이면 +
 *    - 0번째 작업: - - - - -
 *    - 1번째 작업: - - - - +
 * 4. 3번에서 얻은 부호를 숫자들에 적용한다 (numbers)
 * 5. 모두 더하여 target과 비교한다.
 */

// 2진수 변환
function getBinary(count, unit) {
  const arr = [...count.toString(2)];
  while (unit > arr.length) {
    arr.unshift("0");
  }
  return arr;
}
// 1. 배열의 길이만큼 2진수로 변환 5개의 숫자라면 00000부터 시작
// 2. 이진수가 모두 1로 변할 경우 만큼 반복문 실행 11111=> 32번
// 3. 1인 자리의 배열(numbers)의 숫자는 곱하기 -1을 해줌(음수로 변환)
// 4. reduce를 이용하여 모두 더해주어 target과 같은지 확인
function solution(numbers, target) {
  var answer = 0;
  const maxCount = parseInt(new Array(numbers.length).fill(1).join(""), 2);

  for (let i = 0; i < maxCount; i++) {
    const binaryArr = getBinary(i, numbers.length);
    const parseNumber = numbers.map((val, idx) =>
      binaryArr[idx] === "1" ? val * -1 : val
    );
    const sum = parseNumber.reduce((a, b) => a + b);
    if (sum === target) answer++;
  }
  return answer;
}

const res = solution([1, 1, 1, 1, 1], 3); // 5
console.log(res);
