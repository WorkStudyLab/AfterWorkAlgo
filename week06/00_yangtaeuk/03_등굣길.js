/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42898
 *
 * [제한사항]
 *  - 격자의 크기 m, n은 1 이상 100 이하인 자연수입니다.
 *  - m과 n이 모두 1인 경우는 입력으로 주어지지 않습니다.
 *  - 물에 잠긴 지역은 0개 이상 10개 이하입니다.
 *  - 집과 학교가 물에 잠긴 경우는 입력으로 주어지지 않습니다.
 *
 * [아이디어]
 *  - 맨 끝(도착점)부터 자신에게 도달할 수 있는 경우의 수를 더한다.
 *  - (100,100) 위치라면 (100,99)와 (99,100) 두 곳의 경우의 수를 더한 것
 *  - 위와 같은 원리로 도착점부터 출발점까지 모든 경우의 수를 재귀로 구하고
 *  - 이를 dp table에 저장한다
 *
 * [문제점]
 *  - 2분의 1확률로 효율성 문제가 발생함.
 */

function solution(m, n, puddles) {
  // 우물
  const WELL = -1;

  // dp table 생성
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(-1));
  // 시작점 1 초기화
  dp[0][0] = 1;
  // 지도 테이블
  const mapTable = new Array(n).fill(0).map(() => new Array(m).fill(1));

  // 우물 자리 표시
  for (let i = 0; i < puddles.length; i++) {
    const [x, y] = puddles[i];

    mapTable[y - 1][x - 1] = WELL;
  }

  const getAllRoute = (y, x) => {
    // 맵 밖 탐색인지 확인
    if (!mapTable[y] || !mapTable[y][x]) {
      return 0;
    }

    // 현재 좌표가 우물자리인지 확인
    const curItem = mapTable[y][x];
    if (curItem === WELL) {
      dp[y][x] = 0;
      return 0;
    }

    // 시작지점 확인
    if (x === 0 && y === 0) return 1;
    if (y < 0 || x < 0) return 0;

    // dp 저장 여부에 따라 값 반환
    const [left, up] = (() => {
      const dpLeft = dp[y] && dp[y][x - 1];
      const dpUp = dp[y - 1] && dp[y - 1][x];

      const left = dpLeft > -1 ? dpLeft : getAllRoute(y, x - 1);
      const up = dpUp > -1 ? dpUp : getAllRoute(y - 1, x);

      return [left, up];
    })();

    // dp 저장
    dp[y][x] = (left + up) % 1_000_000_007;

    return dp[y][x];
  };

  const allRoute = getAllRoute(n - 1, m - 1);

  return allRoute;
}

const res1 = solution(100, 100, [
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
  [7, 2],
  [12, 24],
  [56, 57],
  [20, 20],
  [20, 21],
]); // 4

console.log(res1);
