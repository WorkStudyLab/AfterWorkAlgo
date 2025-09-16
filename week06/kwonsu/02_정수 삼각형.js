/*
1. 삼각형의 두 번째 줄부터 마지막 줄까지 반복
2. 각 줄에 있는 모든 숫자에 대해, '최대 합계'를 계산해서 해당 자리 값과 치환
    - 바로 윗줄에서 올 수 있는 경로가 하나뿐인 경우에는 그냥 그 값을 더함
    - 경로가 두 개인 경우에는, 두 경로의 최대 합계 중 더 큰 값을 현재 숫자에 더함
3. 계산이 끝난 후, 맨 마지막 줄에 있는 숫자들 중 가장 큰 값이 정답
*/

function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        // 1. 왼쪽 끝일 경우
        // 바로 위(왼쪽 부모)의 값만 더할 수 있습니다.
        triangle[i][j] += triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        // 2. 오른쪽 끝일 경우
        // 바로 위(오른쪽 부모)의 값만 더할 수 있습니다.
        // 윗줄의 마지막 인덱스는 j-1 입니다.
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        // 3. 중간에 있을 경우
        // 위 양쪽 부모 중 더 큰 값을 선택해서 더합니다.
        const leftParent = triangle[i - 1][j - 1];
        const rightParent = triangle[i - 1][j];
        triangle[i][j] += Math.max(leftParent, rightParent);
      }
    }
  }
  return Math.max(...triangle[triangle.length - 1]);
}
