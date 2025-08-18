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
    let size = 1; // u 자신

    for (const v of graph[u]) {
      if (!visited[v]) {
        const childSize = dfs(v);
        // 간선 (u, v)를 끊었다고 가정하면 한 쪽 크기가 childSize
        // |childSize - (n - childSize)| 차이가 최소가 되는 경우를 찾는다.
        const diff = Math.abs(n - 2 * childSize);
        if (diff < answer) answer = diff;

        size += childSize;
      }
    }
    return size;
  }

  dfs(1);
  return answer;
}
