/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 *
 * [제한사항]
 *  - 삼각형의 높이는 1 이상 500 이하입니다.
 *  - 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.
 *
 * [아이디어]
 *  - 동적 프로그래밍 - 상향식으로 접근
 *  - 아래쪽부터 더한 값을 별도 캐시 배열에 저장
 *  - 이미 계산한 노드 결과는 더 이상 계산 할 필요 없음.
 */

function solution(triangle) {
  const cacheArr = new Array(triangle.length).fill(0).map(() => []);

  for (let i = triangle.length - 1; i >= 0; i--) {
    const row = triangle[i];
    const isLeaf = !triangle[i + 1]; // 맨 아래 노드인지 판단 => 다음 row가 있는지

    if (isLeaf) {
      continue;
    }
    for (let j = 0; j < row.length; j++) {
      const item = triangle[i][j];

      const leftChild = cacheArr[i + 1][j] || triangle[i + 1][j];
      const rightChild = cacheArr[i + 1][j + 1] || triangle[i + 1][j + 1];

      let biggerChild = leftChild > rightChild ? leftChild : rightChild;

      // 캐시에 저장할 아이템
      const cacheItem = item + biggerChild;

      // 캐시 저장
      cacheArr[i][j] = cacheItem;
    }
  }

  return cacheArr[0][0];
}

const res1 = solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]); // 30
console.log(res1);
