// 아이디어
// 최소시간 = 0
// 최대시간 = 최대값 * 사람 수
// 중간값 = (최소시간 + 최대시간) / 2
// 중간값으로 모든 사람이 심사를 받을 수 있는지 확인
// A. 중간값 / 심사관의 시간 을 모두 더한 값이 사람 수보다 크거나 같으면 가능
//    -> 최대시간을 중간값 - 1로 변경
// B. 중간값 / 심사관의 시간 을 모두 더한 값이 사람 수보다 작으면 불가능
//    -> 최소시간을 중간값 + 1로 변경
// 최소시간이 최대시간보다 커질 때까지 반복
// 최소시간 리턴

function solution(n, times) {
  let minTime = 0;
  let maxTime = Math.max(...times) * n;

  while (minTime <= maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);
    let total = 0;

    for (const time of times) {
      total += Math.floor(midTime / time);
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
