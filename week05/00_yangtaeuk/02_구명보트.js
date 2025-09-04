/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 *
 * [제약조건]
 * - 몸무게 40~240
 * - 구명보트 탑승 가능 무게 : 40~240
 *   + 항상 최대 몸무게보다 크다.
 * - 인원 : 1~50,000
 *
 * [풀이]
 *
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
  // 몸무게 내림차순으로 정렬
  // => [80,70,50,50]
  const sortArr = people.sort((a, b) => b - a);

  // 맵객체 생성 & 배열 저장
  // => CustomMap(0) [Map] { arr: [ 80, 70, 50, 50 ] }
  const map = new CustomMap(sortArr);
  let answer = 0;

  // 맵에 몸무게별 카운트 저장
  // CustomMap(3) [Map] {
  //   80 => 1,
  //   70 => 1,
  //   50 => 2,
  //   arr: [ 80, 70, 50, 50 ]
  // }
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
  console.log(map);

  // 모든 인원에 대한 탐색 시작
  for (let i = 0; i < sortArr.length; i++) {
    let weight = 0;
    const targetItem = sortArr[i];

    // 맵 객체에 해당 몸무게 카운트가 0이라면
    // 이미 해당 몸무게는 모두 탈출한 케이스
    if (!map.has(targetItem)) continue;

    // 0이 아니라면 해당 사람은 일단 탈출
    map.subCount(targetItem);
    // 무게에 해당 인원의 몸무게를 더한다.
    weight += targetItem;

    // 같이 탈수있는 사람의 최대 몸무게를 찾는다
    // 제한 무게 - 방금 탑승한 사람 무게
    const maxWeight = limit - targetItem;
    // 최대 몸무게보다 작은 인원 목록을 구한다.
    const miniNumList = map.getMiniNumber(maxWeight);

    // 인원 목록에서 가장 무거운 인원 선택
    const pushItem = miniNumList[0] || -1;
    // 해당 인원의 카우느가 0이 아니라면 보드에 탑승
    if (map.has(pushItem)) map.subCount(pushItem);

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
