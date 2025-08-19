function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of wires) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = Array(n + 1).fill(false);
  let answer = n;

  function dfs(u) {
    visited[u] = true;
    let size = 1; // 자기 자신만 있을때 크기는 1

    for (const v of graph[u]) {
      if (!visited[v]) {
        const childSize = dfs(v);
        // 간선 (u, v)를 끊었다고 가정하면 한 쪽 크기가 childSize
        // |childSize - (n - childSize)| 차이가 최소가 되는 경우를 찾는다.
        const diff = Math.abs(n - 2 * childSize);
        if (diff < answer) answer = diff;

        size += childSize; // 자식 노드 크기 더하기 이어지는 구간에는 계속 +1됨
      }
    }
    return size;
  }

  dfs(1);
  return answer;
}
