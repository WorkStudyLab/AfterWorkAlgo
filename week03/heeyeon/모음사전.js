function solution(word) {
  const chars = ["A", "E", "I", "O", "U"];
  const answer = [];

  function dfs(cur) {
    if (cur.length > 5) return;
    if (cur.length > 0) answer.push(cur);
    for (const ch of chars) {
      dfs(cur + ch);
    }
  }

  dfs("");

  return answer.indexOf(word) + 1;
}
