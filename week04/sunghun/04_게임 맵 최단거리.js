// 효율성 이슈로 실패 (최단거리는 BFS로 풀어야 함)
function solutionDFS(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(new Array(n), () => new Array(m).fill(false));
  let answer = Infinity;
  dfs(0, 0, 1);

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
  return Number.isFinite(answer) ? answer : -1;
}

function solutionBFS(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dist = Array.from(new Array(n), () => new Array(m).fill(0));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[0, 0]];
  dist[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === n - 1 && y === m - 1) return dist[x][y];

    for (const [dx, dy] of dirs) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue; // 범위 체크
      if (maps[nx][ny] === 0) continue; // 벽
      if (dist[nx][ny] !== 0) continue; // 이미 방문

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  return -1;
}

function solutionBFS_headTail(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dist = Array.from(new Array(n), () => new Array(m).fill(0));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // shift 배제한 head tail 로직
  const qx = new Array(n * m).fill(0);
  const qy = new Array(n * m).fill(0);
  let head = 0;
  let tail = 1;
  dist[0][0] = 1;

  while (head < tail) {
    const x = qx[head];
    const y = qy[head];
    head++;

    if (x === n - 1 && y === m - 1) return dist[x][y];

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue; // 범위 밖
      if (maps[nx][ny] === 0) continue; // 벽
      if (dist[nx][ny] !== 0) continue; // 이미 방문

      dist[nx][ny] = dist[x][y] + 1;
      qx[tail] = nx;
      qy[tail] = ny;
      tail++;
    }
  }
  return -1;
}
