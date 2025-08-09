/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 *
 * [아이디어]
 * 1. 모든 옷을 입는 경우의 수를 구하는 원리와 비슷하게 구한다.
 * 2. 해당 파츠를 안입는 경우가 있기 때문에 옷이 하나 더있다고 생각한다.
 * 3. 모든 옷을 안입는 경우는 없기 때문에 경우의 수를 한개 빼준다.
 *
 * [예시]
 * 모자 : 캡모자, 비니, 머리띠
 * 얼굴 : 안경, 선글라스
 * 상의 : 반팔, 후드티
 *
 * 위와 같을 때 파츠를 모두 입으면서 조합이 다른 경우는 3x2x2로 12가지의 경우가 나온다.
 * 이번 문제에서는 특정 파츠를 아예 안입는 경우가 있기 때문에 파츠별로 1개의 케이스를 늘려준다.
 *
 * 모자 : 캡모자, 비니, 머리띠, 탈의
 * 얼굴 : 안경, 선글라스, 탈의
 * 상의 : 반팔, 후드티, 탈의
 *
 * 이렇게 할 경우 총 4x3x3으로 36가지의 케이스가 생긴다.
 * 하지만 이번 문제에서 '탈의,탈의,탈의'를 고르는 케이스는 있을 수 없으므로 -1을 해준다.
 *
 */
function solution(clothes) {
  const obj = {};
  let answer = 1;

  // 1. 카테고리별 추출
  for (let i = 0; i < clothes.length; i++) {
    const [name, category] = clothes[i];
    const objCategory = obj[category];
    if (!!objCategory) obj[category].push(name);
    else obj[category] = [name];
  }

  const keys = Object.keys(obj);
  // 파츠별로 순회하면서 length를 이용한 계산
  for (let i = 0; i < keys.length; i++) {
    const item = obj[keys[i]];

    // 탈의 하는 케이스가 있기 때문에 length에서 1을 더해준 값을 곱한다.
    answer *= item.length + 1;
  }

  return answer - 1;
}

const res1 = solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]); // 5

const res2 = solution([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]); // 3

console.log(res1);
console.log(res2);
