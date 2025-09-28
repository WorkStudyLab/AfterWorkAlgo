// 생각
/*
모든 마을에 방문하는 최단 거리를 구하고
K 보다 작거나 같은 마을의 개수를 세서 반환

최단거리는 다익스트라 알고리즘 사용

우선순위 큐 (최소 힙) 사용

*/

const MinHeap = require("./MinHeap");

function solution(N, road, K) {
  // 1. 그래프 구성 (인접 리스트)
  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [a, b, c] of road) {
    graph[a].push({ node: b, cost: c });
    graph[b].push({ node: a, cost: c });
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
    for (const { node: nextNode, cost } of graph[node]) {
      const newDist = dist + cost;

      // 더 짧은 경로를 찾았다면 업데이트
      if (newDist < distances[nextNode]) {
        distances[nextNode] = newDist;
        pq.insert({ node: nextNode, dist: newDist });
      }
    }
  }

  // 3. K 이하의 시간으로 배달 가능한 마을 개수 세기
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (distances[i] <= K) {
      count++;
    }
  }

  return count;
}

// 테스트
const testCase1 = {
  N: 5,
  road: [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  K: 3,
};

const testCase2 = {
  N: 6,
  road: [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  K: 4,
};

console.log(
  "테스트 케이스 1:",
  solution(testCase1.N, testCase1.road, testCase1.K)
); // 기댓값: 4
console.log(
  "테스트 케이스 2:",
  solution(testCase2.N, testCase2.road, testCase2.K)
); // 기댓값: 4
