/**
 * 1번 해결 방법
 * -> 처음에 Set객체에 넣어서 만드려했는데 중복이 모두 없어져서 불가능.
 * 그냥 모든 아이템을 순회하면서 이전에 answer 배열에 들어간 값과 비교
 * 같으면 패스, 다르면 answer 배열 추가
 */
function solution1(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const lastAnswerItem = answer[answer.length - 1];

    if (lastAnswerItem !== item) answer.push(item);
  }

  return answer;
}

/**
 * 2번 해결 방법 : 도운전임님 작성한거보고 짧게 작성해봄
 */
const solution2 = (arr) => arr.filter((item, idx) => item !== arr[idx + 1]);

console.log(solution2([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
