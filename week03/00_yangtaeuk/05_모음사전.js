/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/84512
 *
 * [아이디어]
 * 1. 재귀함수를 통하여 모든 문자 케이스를 수집한다.
 * 2. 문자 케이스들을 정렬한다.
 * 3. 정렬된 문자에서 find index를 하여 반환한다.
 */

/**
 * 재귀합수
 * @param {String} word
 * @param {Array} arr
 */
const recursion = (word, arr, dict) => {
  for (let i = 0; i < arr.length; i++) {
    if (word.length === 5) return;

    const nextWord = word + arr[i];
    dict.push(nextWord);
    recursion(nextWord, arr, dict);
  }
};

function solution(word) {
  const wordArr = ["A", "E", "I", "O", "U"];
  const dict = []; // 모든 문자를 저장할 저장소

  // 문자 수집
  for (let i = 0; i < wordArr.length; i++) {
    const target = wordArr[i];
    dict.push(target);
    recursion(target, wordArr, dict);
  }

  // 인덱스 search
  return dict.findIndex((item) => item === word) + 1;
}

const res1 = solution("AAAAE"); //6
console.log("res1 : ", res1);
