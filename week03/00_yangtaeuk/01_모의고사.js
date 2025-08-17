/**
 * [아이디어] 단순 노가다
 * 1. 전체 정답을 순회
 * 2. 해당 회차의 정답을 맞춘 경우 카운트 ++
 * 3. 최대 점수를 조회
 * 4. 최대 점수와 같다면 정답 배열 push
 */
function solution(answers) {
  var answer = [];
  var a = [1, 2, 3, 4, 5];
  var b = [2, 1, 2, 3, 2, 4, 2, 5];
  var c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var count = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) count[0]++;
    if (answers[i] === b[i % b.length]) count[1]++;
    if (answers[i] === c[i % c.length]) count[2]++;
  }
  const maxValue = Math.max(count[0], count[1], count[2]);
  if (count[0] === maxValue) answer.push(1);
  if (count[1] === maxValue) answer.push(2);
  if (count[2] === maxValue) answer.push(3);
  return answer;
}

const res = solution([1, 2, 3, 4, 5]); // 1
console.log(res);
