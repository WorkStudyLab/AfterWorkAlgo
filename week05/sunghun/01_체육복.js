// 1차 풀이
function solution(n, lost, reserve) {
  let realLost = lost.filter((i) => !reserve.includes(i)).sort((a, b) => a - b);
  let realReserve = reserve
    .filter((i) => !lost.includes(i))
    .sort((a, b) => a - b);
  let answer = n - realLost.length;
  const extraClothes = new Array(n + 1).fill(false);
  for (let i = 0; i < realReserve.length; i++) {
    extraClothes[realReserve[i]] = true;
  }
  for (let i = 0; i < realLost.length; i++) {
    const lostPersonIndex = realLost[i];
    if (extraClothes[lostPersonIndex - 1]) {
      extraClothes[lostPersonIndex - 1] = false;
      answer++;
    } else if (extraClothes[lostPersonIndex + 1]) {
      extraClothes[lostPersonIndex + 1] = false;
      answer++;
    }
  }
  return answer;
}

//2차 - Set을 써서 중복제거 및 filter나 includes 미사용
function solutionSet(n, lost, reserve) {
  // 실제 잃어버린 학생과 여분이 있는 학생 3번 5번 테케 대응
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);
  for (const x of reserve) {
    if (lostSet.has(x)) {
      lostSet.delete(x);
      reserveSet.delete(x);
    }
  }

  // 잃어버린 학생을 오름차순으로 처리(결정적 순서) 13, 14번 테케 대응
  const need = Array.from(lostSet).sort((a, b) => a - b);

  // 왼쪽→오른쪽 우선 대여
  let answer = n - need.length;
  for (const i of need) {
    if (reserveSet.has(i - 1)) {
      reserveSet.delete(i - 1);
      answer++;
    } else if (reserveSet.has(i + 1)) {
      reserveSet.delete(i + 1);
      answer++;
    }
  }
  return answer;
}
