// 두 단어가 한 글자 차이나는지 확인하는 함수
function isNeighbor(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff++;
      if (diff > 1) return false;
    }
  }
  return diff === 1;
}

function solutionDFS(begin, target, words) {
  const arr = [begin, ...words];
  const n = arr.length;
  const targetIdx = arr.indexOf(target);
  const visited = new Array(n).fill(false);

  let answer = Infinity;
  visited[0] = true;

  function dfs(curr, depth) {
    if (depth >= answer) return;
    if (curr === targetIdx) {
      answer = depth;
      return;
    }

    for (let i = 1; i < n; i++) {
      if (visited[i]) continue;
      if (isNeighbor(arr[curr], arr[i])) {
        visited[i] = true;
        dfs(i, depth + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0, 0);

  return Number.isFinite(answer) ? answer : 0;
}

function solutionBFS(begin, target, words) {
  const arr = [begin, ...words];
  const n = arr.length;
  const targetIdx = arr.indexOf(target);
  const visited = new Array(n).fill(false);

  const queue = [];
  visited[0] = true;
  queue.push([0, 0]);

  while (queue.length) {
    const [curr, depth] = queue.shift();
    if (curr === targetIdx) return depth;

    for (let i = 0; i < n; i++) {
      if (!visited[i] && isNeighbor(arr[curr], arr[i])) {
        visited[i] = true;
        queue.push([i, depth + 1]);
      }
    }
  }

  return 0;
}
