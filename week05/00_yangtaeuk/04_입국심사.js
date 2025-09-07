/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43238
 *
 * [제약사항]
 * 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
 * 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
 * 심사관은 1명 이상 100,000명 이하입니다.
 *
 *
 */

function solution(n, times) {
  let minTime = 0;
  let maxTime = Math.max(...times) * n;

  while (minTime <= maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);
    let total = 0;

    for (const time of times) {
      total += Math.floor(midTime / time);
      console.log(midTime, total);
    }

    if (total >= n) {
      maxTime = midTime - 1;
    } else {
      minTime = midTime + 1;
    }
  }

  return minTime;
}

console.log(solution(6, [7, 10]));
