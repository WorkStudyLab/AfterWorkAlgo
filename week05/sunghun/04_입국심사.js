// 이분 탐색
function solution(n, times) {
  // 정렬 시 하단 isSuccess 에서 조금 더 빠르게 탈출가능
  const sortTimes = times.sort((a, b) => a - b);
  const length = times.length;
  let lo = 1;
  // 최대 시간은 가장 오래 걸리는 사람이 모두 심사를 받는 경우
  let hi = times[length - 1] * n;
  let answer = hi;

  const isSuccess = (time) => {
    let count = 0;
    for (let i = 0; i < length; i++) {
      count += Math.floor(time / sortTimes[i]);
      if (count >= n) return true;
    }
    return false;
  };

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (isSuccess(mid)) {
      answer = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return answer;
}
