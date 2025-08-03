/**
 * 해결 방법
 * -> 처음에 Queue형식으로 shift를 사용하여 풀었는데 효율성 문제 발생
 * 이중 for문을 사용, 모든 가격을 순회하며 몇 회동안 하락이 발생하지 않는지 count
 */
function solution(prices = []) {
  var answer = [];
  for (let i = 0; i < prices.length; i++) {
    const targetPrice = prices[i];
    let counter = 0;

    for (let j = i + 1; j < prices.length; j++) {
      counter++;
      const comparePrice = prices[j];

      if (targetPrice > comparePrice) break;
    }
    answer.push(counter);
  }

  return answer;
}

const res = solution([1, 2, 3, 2, 3]); //[4, 3, 1, 1, 0]
