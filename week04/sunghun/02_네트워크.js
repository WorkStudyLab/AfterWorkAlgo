function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      const stack = [i];
      while (stack.length > 0) {
        const curr = stack.pop();
        visited[curr] = true;
        for (let i = 0; i < n; i++) {
          if (!visited[i] && computers[curr][i]) {
            stack.push(i);
          }
        }
      }
      answer += 1;
    }
  }

  return answer;
}
