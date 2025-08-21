// 효율성 이슈로 실패 (최단거리는 BFS로 풀어야 함)
function solutionDFS(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  let answer = Infinity;

  function dfs(x, y, depth) {
    if (x < 0 || y < 0 || x >= n || y >= m) return; // 격자 벗어남
    if (maps[x][y] === 0 || visited[x][y]) return; // 방문하거나 막혀있음
    if (depth >= answer) return; // 이미 찾아낸 깊이보다 깊음
    if (x === n - 1 && y === m - 1) {
      if (depth < answer) answer = depth;
      return;
    }

    visited[x][y] = true;
    dfs(x + 1, y, depth + 1); // 하
    dfs(x - 1, y, depth + 1); // 상
    dfs(x, y + 1, depth + 1); // 우
    dfs(x, y - 1, depth + 1); // 좌
    //혹은 하단 방식으로 간편하게 선언가능
    // const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    // for (const [dx, dy] of dirs) dfs(x + dx, y + dy, depth + 1);
    visited[x][y] = false;
  }

  dfs(0, 0, 1);
  return Number.isFinite(answer) ? answer : -1;
}
