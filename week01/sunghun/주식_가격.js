// 첫 풀이 -> 테스트 2,3,4,5 시간 효율성 문제로 실패
function solution(prices) {
  var answer = [];
  while (prices.length) {
    let count = 0;
    const price = prices.shift(); // 범인
    for (let i = 0; i < prices.length; i++) {
      count++;
      if (price > prices[i]) break;
    }
    answer.push(count);
  }
  return answer;
}

// 두번째 풀이
function solution2(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      answer[i]++;
      if (prices[i] > prices[j]) break;
    }
  }

  return answer;
}

// 마지막 풀이 -> 이건 프로그래머스 해설보고 이해하려했으나 아직도 잘 모르겠음
function solution3(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  // 뒤에서부터 처리
  for (let i = prices.length - 1; i >= 0; i--) {
    const current = prices[i];

    // 가격이 더 크거나 같은 동안 pop (유지된 시간 축적)
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= current) {
      stack.pop();
    }

    if (stack.length === 0) {
      answer[i] = prices.length - 1 - i;
    } else {
      answer[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return answer;
}
