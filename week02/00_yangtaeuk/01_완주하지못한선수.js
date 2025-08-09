/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 *
 * [아이디어] 옛날에 이미 풀어둔거라 정확하지는 않음
 * 1. 두 배열의 내용은 같지만 한 배열에 하나의 아이템만 없음.
 * 2. 그럼 동일한 정렬 메서드를 호출한후 for돌면서 하나씩 비교
 * 3. 두개의 아이템이 서로 다른 시점이 생김.
 * 4. 해당 시점에 participaint가 아직 완주하지 못한 범인
 */
function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

const res1 = solution(["leo", "kiki", "eden"], ["eden", "kiki"]); // leo
const res2 = solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
); // vinko

console.log(res1);
console.log(res2);
