function solution(word) {
  let w = "";
  // let words = ["A", "E", "I", "O", "U"];
  let words = ["A", "E"];
  let wordsLimit = 5;
  let count = 0;
  let answer = 0;
  function dfs(count) {
    for (let i = 0; i < words.length; i++) {
      if (w.length === wordsLimit) {
        count++;
        w.slice(0, -1);
      }
      if (count === wordsLimit) {
        wordsLimit--;
        count = 0;
        continue;
      }
      w += words[count];
      console.log(w);
      dfs(count);
    }
  }

  dfs(count);
  return answer;
}
