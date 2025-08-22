/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 *
 * [제한사항]
 * 1. 단어 길이는 3~10
 * 2. words에는 3~50개의 단어
 * 3. 중복단어 없음
 * 4. begin과 target은 같지 않음
 */

/**
 * Word 객체 생성
 * 1. 각 단어는 변환 가능한 단어 목록을 만드는 함수를 갖는다. (getSwitchPossibleWord Method)
 *    -> 비교 단어를 한글자씩 비교, 1글자만 다르다면 변환 가능
 * 2. 방문 여부를 판단할수 있는 속성이 있다. (isVisited)
 * 3. 몇개의 변환 과정을 거쳤는지 알수있다. (counter)
 */
class Word {
  constructor(str, isTarget) {
    this.str = str;
    this.isTarget = isTarget;
    this.isVisited = false;
    this.counter = 0;
  }

  getSwitchPossibleWord(wordList) {
    const returnArr = [];

    // 전체 단어 리스트 검사
    for (let i = 0; i < wordList.length; i++) {
      const compareWord = wordList[i];
      // 방문 이력 있으면 체크 하지 않음
      if (compareWord.isVisited) continue;

      // 한글자만 다른지 체크하기
      let diffCounter = 0;
      for (let j = 0; j < compareWord.str.length; j++) {
        const str1 = compareWord.str[j];
        const str2 = this.str[j];

        if (str1 !== str2) diffCounter++;
      }

      // 한글자만 다를 경우
      if (diffCounter === 1) {
        returnArr.push(compareWord);
      }
    }
    return returnArr;
  }
}

function solution(b, t, words) {
  const wordObjList = words.map((word) => {
    const isTarget = t === word;
    return new Word(word, isTarget);
  });
  const begin = new Word(b);

  const queue = new Array();
  queue.push(begin);

  // Queue 반복
  let queueCount = 0;
  while (!!queue[queueCount]) {
    // pop
    const item = queue[queueCount];
    queueCount++;

    const nextWordList = item.getSwitchPossibleWord(wordObjList);

    for (let i = 0; i < nextWordList.length; i++) {
      const nextWord = nextWordList[i];
      nextWord.isVisited = true;
      nextWord.counter = item.counter + 1;

      // 다음 word가 타겟인 경우
      if (nextWord.isTarget) return nextWord.counter;

      queue.push(nextWord);
    }
  }
  return 0;
}

// const res = solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]); // 4
// console.log("res", res);
const res2 = solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]); // 0
console.log("res2", res2);
