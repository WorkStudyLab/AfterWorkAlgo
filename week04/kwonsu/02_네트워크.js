function solution(n, computers) {
  let answer = 0;
  const visited = new Set();

  // dfs 함수를 통해 특정 노드에서 방문 가능한 모든 노드를 방문하고, visited 에 추가합니다.
  function dfs(index) {
    // 현재 노드를 방문 처리 합니다.
    visited.add(index);

    // 현재 노드와 연결된 모든 노드를 순회하며 아직 방문하지 않은 노드를 찾습니다.
    for (let j = 0; j < n; j++) {
      // 1. 연결되어 있고 (computers[index][j] === 1),
      // 2. 아직 방문하지 않았다면 (!visited.has(j)),
      // 3. 재귀적으로 탐색을 시작합니다 (dfs(j)).
      if (computers[index][j] === 1 && !visited.has(j)) {
        dfs(j);
      }
    }
  }

  // 메인 반복문: 모든 컴퓨터를 순회하며 네트워크의 시작점을 찾습니다.
  for (let i = 0; i < n; i++) {
    // 아직 방문하지 않은 컴퓨터를 발견했다면
    if (!visited.has(i)) {
      // 새로운 네트워크를 찾았으므로 카운트를 1 증가시킵니다.
      answer++;
      // 이 컴퓨터와 연결된 전체 네트워크를 탐색합니다.
      dfs(i);
    }
  }

  return answer;
}

// 실패 사례
// 컴퓨터 개수를 네트워크 개수로 잡고
// 새로운 연결을 발견할 때 마다 네트워크 개수를 1 줄이는 방식
// 간접 네트워크를 인지하지 못해서 기각
// function solution(n, computers) {
//     let answer =  n;
//     let connects = new Set();
//
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             let current = computers[i][j];
//             if(i !== j){
//                 if(current === 1){
//                     let connect = [i,j].sort().join('');
//                     connects.add(connect);
//                 }
//             }
//         }
//     }
//
//     return answer-connects.size;
// }

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
