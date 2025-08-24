/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 *
 * [아이디어]
 * 1. 방문 여부 배열을 만든다(n길이의 1차원 배열) [false,false,false]
 * 2. 컴퓨터(노드)별로 순회하며 방문하며 방문 횟수를 카운트한다.
 *    - 방문시 방문여부를 방문 배열에 체크한다(visitedArr)
 *    - 재귀 형태로 연결된 다른 노드를 방문한다.(dfs)
 *    - 재귀 형태로 방문했을 경우에도 방문 배열에 체크해준다.
 *    - 방문 이력(visitedArr)이 true이면 카운트하지 않는다.
 * 3. 카운트를 반환한다.
 *
 * [실행 시나리오]
 * 1. 전제조건
 *     - params : n=3, computers=[[1, 1, 0], [1, 1, 0], [0, 0, 1]]
 *     - answer : 2
 * 2. 실행
 *     - 초기화
 *       + answer = 0
 *       + visitedArr = [false,false,false]
 *     - 노드 순회
 *       + 1번 노드 방문
 *         ++ answer++
 *         ++ 1번 노드 방문 여부 true처리 [true,false,false]
 *         ++ 1번 노드와 연결된 노드 체크
 *           +++ 값이 1이면서 방문여부가 false인 경우 dfs 재귀 실행
 *           +++ 1번 노드는 1번, 2번 노드와 연결되어 있음.
 *              ++++ 1번 노드는 visit처리 되어있기 때문에 pass
 *           +++ 2번 노드 방문
 *           +++ 2번 노드 방문 여부 true처리 [true,true,false]
 *           +++ 연결된 노드 검사
 *           +++ 1번 노드와 2번 노드 연결
 *           +++ 모두 visit 처리되어 있으므로 재귀 종료
 *       + 2번 노드 방문
 *         ++ visit 처리되어 있으므로 작업 X
 *       + 3번 노드 방문
 *         ++ answer++
 *         ++ 3번 노드 방문 여부 true처리 [true,true,true]
 *         ++ 3번 노드와 연결된 노드 체크
 *         ++ 본인과만 연결되어 있음 [0,0,1]
 *  모든 노드를 방문했으므로 answer 반환(2)
 */
function solution(n, computers) {
  let answer = 0;
  const visitedArr = Array(n).fill(false);

  function dfs(node) {
    visitedArr[node] = true;
    for (let i = 0; i < computers[node].length; i++) {
      if (computers[node][i] === 1 && !visitedArr[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visitedArr[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
