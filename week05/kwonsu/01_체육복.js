// 1. 확정 인원(have) = 체육복을 가진 인원 - 도난 당한 인원
// 2. 여벌 체육복을 가졌는데, 도난당한 인원들을 먼저 체크하고 lost와 reserve 에서 제거
//    (자기 먼저 써야 하기 때문)
// 3. 도난당한 인원(여벌 체육복도 가지고 오지 않은)을 순회하면서 앞뒤 번호가
//    여벌이 있는 사람 목록에 존재하는지 체크하고, 존재할 경우 answer + 1,
//    그리고 여벌을 빌려줬기 때문에 목록에서 제거
// 4. answer + have return

function solution(n, lost, reserve) {
  let answer = 0;

  // 확정 인원
  const have = n - lost.length;

  // 간편한 검색과 제거를 위해 Map 으로 선언
  const lostMap = new Map();
  const resMap = new Map();

  // 앞사람과 뒷사람에게 빌리는 조건 때문에, 어떤 학생에게 먼저 빌려주느냐에 따라 전체 결과가 달라질 수 있습니다.
  // 예를 들어 lost 가 [4,2] , reserve 가 [3,5] 일 경우
  // 4번 학생이 먼저 3번 학생에게 옷을 빌리고 나면 2번 학생은 옷을 빌릴 수가 없습니다.
  // 하지만 lost 를 [2,4], reserve 를 [3,5] 로 정렬해두었을 경우
  // 2번 학생은 3번에게, 4번 학생은 5번에게 빌릴 수 있게 됩니다.
  // 이런 문제는 보통 배열을 정렬한 뒤 순서대로 처리하면 최적의 해를 구할 수 있습니다.
  lost = lost.sort();
  reserve = reserve.sort();

  for (let i = 0; i < lost.length; i++) {
    lostMap.set(lost[i], 0);
  }
  for (let i = 0; i < reserve.length; i++) {
    resMap.set(reserve[i], 0);
  }

  // 여벌 체육복을 가졌는데, 한 벌을 도난당한 인원들을 먼저 체크하고 리스트에서 제거합니다.
  for (const key of lostMap.keys()) {
    console.log(key);
    if (resMap.has(key)) {
      resMap.delete(key);
      lostMap.delete(key);
      answer += 1;
    }
  }

  // 진짜 가진 체육복이 없는 인원 목록을 순회합니다.
  for (const key of lostMap.keys()) {
    // 빌려줄 수 있는 앞뒤 번호를 여벌 체육복이 있는 사람 목록에서 검색하고,
    // 해당 값이 있을 경우 옷을 빌렸다고 판단, answer를 1 더하고, 여벌 체육복 목록에서 해당 값을 제거합니다.
    const minus = key - 1;
    const plus = key + 1;

    if (resMap.has(minus)) {
      answer += 1;
      resMap.delete(minus);
    } else if (resMap.has(plus)) {
      answer += 1;
      resMap.delete(plus);
    }
  }

  // 추가로 참여할 수 있게 된 인원(answer)과 참여가 확정되어 있었던 인원(have)를 더해서 반환합니다.
  return answer + have;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
