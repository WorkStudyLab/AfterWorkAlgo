function solution(brown, yellow) {
  let answer = [];
  // 가로 + 세로 길이
  // 테두리의 구조 = (가로 + 세로) * 2 - 4 = brown
  // 가로 + 세로 = (brown - 4) / 2
  const xplusy = (brown + 4) / 2;
  // i = 3인 이유는 세로의 최소값이 3 (노랑색이 최소 1개 이상) , xplusy - 3인 이유는 가로의 최대값에 세로값이 빠짐
  for (let i = 3; i <= xplusy - 3; i++) {
    // 가로 길이
    const x = xplusy - i;
    // 세로 길이
    const y = i;
    if (x * y === brown + yellow) {
      answer = [x, y];
      break;
    }
  }
  return answer;
}
