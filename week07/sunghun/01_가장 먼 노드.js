function solution(n, vertex) {
  // 1. 그래프 인접 리스트 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of vertex) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]] 의 인접리스트
  //   [
  //     [],
  //     [ 3, 2 ],
  //     [ 3, 1, 4, 5 ],
  //     [ 6, 4, 2, 1 ],
  //     [ 3, 2 ],
  //     [ 2 ],
  //     [ 3 ]
  //   ]

  // 2. BFS로 최단 거리 구하기
  const dist = Array(n + 1).fill(-1);
  const queue = [1];
  dist[1] = 0;

  while (queue.length > 0) {
    const cur = queue.shift();
    for (const next of graph[cur]) {
      if (dist[next] === -1) {
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  // 3. 최대 거리 찾기
  const maxDist = Math.max(...dist);

  // 4. 최대 거리와 같은 노드 개수 카운트
  return dist.filter((d) => d === maxDist).length;
}
