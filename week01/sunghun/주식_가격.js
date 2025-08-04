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
// 테스트 1 〉	통과 (8.37ms, 44.5MB)
// 테스트 2 〉	통과 (4.88ms, 41.7MB)
// 테스트 3 〉	통과 (29.71ms, 45.2MB)
// 테스트 4 〉	통과 (4.87ms, 41.9MB)
// 테스트 5 〉	통과 (25.68ms, 41.9MB)
function solution2(prices) {
  const n = prices.length;
  const answer = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      count++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(count);
  }

  return answer;
}

// 마지막 풀이 -> 이건 프로그래머스 해설보고 이해하려했으나 아직도 잘 모르겠음
// 테스트 1 〉	통과 (19.77ms, 43.3MB)
// 테스트 2 〉	통과 (26.94ms, 41.7MB)
// 테스트 3 〉	통과 (27.57ms, 43.9MB)
// 테스트 4 〉	통과 (3.98ms, 42.2MB)
// 테스트 5 〉	통과 (3.63ms, 42.3MB)
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
