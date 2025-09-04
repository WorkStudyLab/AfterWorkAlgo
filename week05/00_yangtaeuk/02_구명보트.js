/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 *
 * [제약조건]
 * - 몸무게 40~240
 * - 구명보트 탑승 가능 무게 : 40~240
 *   + 항상 최대 몸무게보다 크다.
 * - 인원 : 1~50,000
 */
class CustomMap extends Map {
  constructor(sortArr) {
    super();
    this.arr = sortArr;
  }

  // 전달받은 숫자보다 작은 타겟들을 반환
  getMiniNumber(num) {
    const arr = [...this.keys()].filter((item) => item <= num);
    return arr;
  }

  addCount(num) {
    const count = this.get(num);
    this.set(num, count + 1);
  }
  subCount(num) {
    const count = this.get(num);
    this.set(num, count - 1);

    if (count - 1 === 0) {
      this.delete(num);
    }
  }
}

function solution(people, limit) {
  const sortArr = people.sort((a, b) => b - a);
  const map = new CustomMap(sortArr);
  let answer = 0;

  // 맵 객체 안에 저장
  for (let i = 0; i < sortArr.length; i++) {
    const item = people[i];

    // 이미 아이템이 있다면 +1
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    }
    // 없다면 1로 초기화
    else {
      map.set(item, 1);
    }
  }

  for (let i = 0; i < sortArr.length; i++) {
    let weight = 0;
    const targetItem = sortArr[i];

    // 이미 해당 몸무게는 모두 탈출한 케이스
    if (!map.has(targetItem)) continue;

    map.subCount(targetItem);
    weight += targetItem;

    const maxWeight = limit - targetItem;
    const miniNumList = map.getMiniNumber(maxWeight);

    const pushItem = miniNumList[0] || -1;
    if (map.has(pushItem)) map.subCount(pushItem);

    // 보트 탑승 : 탈수있는 가장 무거운 사람

    answer++;
  }

  return answer;
}

// 문제 예시 케이스
const res = solution([70, 50, 80, 50], 100); //3
console.log(res);
// 한명인 케이스
// const res2 = solution([70], 240); // 1
// console.log(res2);
