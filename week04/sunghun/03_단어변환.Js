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

function solution(begin, target, words) {
  const arr = [begin, ...words];
  const n = arr.length;
  let answer = Infinity;
  const visited = new Array(n).fill(false);

  function dfs(index, depth) {
    if (depth >= answer) return;

    const curr = arr[index];
    if (curr === target) {
      if (depth < answer) answer = depth;
      return;
    }

    for (let i = 1; i < n; i++) {
      if (!visited[i] && isNeighbor(curr, arr[i])) {
        visited[i] = true;
        dfs(i, depth + 1);
        visited[i] = false;
      }
    }
  }

  visited[0] = true;
  dfs(0, 0);

  return Number.isFinite(answer) ? answer : 0;
}
