// 생각
/*
모든 마을에 방문하는 최단 거리를 구하고
최단 거리가 가장 큰 값을 구해서
해당 값과 같은 거리를 가지는 마을의 개수를 구한다.

최단거리는 다익스트라 알고리즘 사용

우선순위 큐 (최소 힙) 사용

*/

const MinHeap = require("./MinHeap");

function solution(N, vertex) {
  // 1. 그래프 구성 (인접 리스트)
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [a, b] of vertex) {
    graph[a].push({ node: b });
    graph[b].push({ node: a });
  }

  // 2. 다익스트라 알고리즘
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0; // 1번 마을에서 시작

  const pq = new MinHeap();
  pq.insert({ node: 1, dist: 0 });

  while (!pq.isEmpty()) {
    const { node, dist } = pq.extractMin();

    // 이미 처리된 노드면 건너뛰기
    if (dist > distances[node]) continue;

    // 인접한 노드들 확인
    for (const { node: nextNode } of graph[node]) {
      const newDist = dist + 1;

      // 더 짧은 경로를 찾았다면 업데이트
      if (newDist < distances[nextNode]) {
        distances[nextNode] = newDist;
        pq.insert({ node: nextNode, dist: newDist });
      }
    }
  }

  return distances.filter((d) => d === Math.max(...distances.slice(1))).length;
}

// 테스트
const testCase1 = {
  N: 6,
  vertex: [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ],
};

console.log("테스트 케이스 1:", solution(testCase1.N, testCase1.vertex)); // 기댓값: 4
