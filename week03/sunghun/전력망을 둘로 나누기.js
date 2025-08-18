function solution(word) {
  const V = ["A", "E", "I", "O", "U"];
  const LIMIT = 5;

  let count = 0;
  let found = false;
  let answer = 0;
  let w = "";

  function dfs() {
    // 길이 1~5인 모든 접두어가 '단어'로 취급
    if (w.length > 0) {
      count++;
      if (w === word) {
        answer = count;
        found = true;
        return; // 결과 찾음 종료
      }
    }
    if (found) return; // 결과 찾음 종료
    if (w.length === LIMIT) return; // 제한 길이에 도달함 종료

    for (let i = 0; i < V.length; i++) {
      if (found) return; // 결과 찾음 종료
      w += V[i];
      dfs();
      w = w.slice(0, -1);
    }
  }

  dfs();
  return answer;
}
