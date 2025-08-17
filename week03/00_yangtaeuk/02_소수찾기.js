/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 1. 재귀를 이용한 모든 조합의 숫자 생성 및 set 객체에 저장 (중복방지)
 * 2. 2이상의 숫자만 필터링
 */
const set = new Set();

// 재귀함수
const recursion = (target, remainArr) => {
  for (let i = 0; i < remainArr.length; i++) {
    const remainStr = remainArr[i];
    const newStr = target + remainStr;
    set.add(parseInt(newStr));
    recursion(
      newStr,
      remainArr.filter((_, idx) => idx !== i)
    );
  }
};

function solution(numbers) {
  // numbers === "110"
  const arr = [...numbers]; // [ '1', '1', '0' ]
  // 재귀함수를 통한 모든 가능한 숫자 조합 저장
  for (let i = 0; i < arr.length; i++) {
    const target = arr[i];
    set.add(parseInt(target));
    recursion(
      target,
      arr.filter((_, idx) => idx !== i)
    );
  } // => Set(6) { 1, 11, 110, 10, 101, 0 }

  // 2이상의 숫자들만 필터링(0과 1은 소수 체크하지 않음)
  const newArr = Array.from(set.values()).filter((item) => item >= 2);
  // => [ 11, 110, 10, 101 ]

  // 숫자를 하나씩 순회하며 소수인지 판단
  let answer = 0;
  for (let i = 0; i < newArr.length; i++) {
    const item = newArr[i];
    if (item === 2) {
      answer++;
      continue;
    }

    const dividers = []; // 약수 배열
    // 2부터 타겟 숫자의 제곱근까지만 체크
    for (let divider = 2; divider <= Math.sqrt(item); divider++) {
      if (item % divider === 0) dividers.push(divider);
    }

    // 나누어지는 수(약수)가 없다면 count up
    if (dividers.length === 0) answer++;
  }

  return answer;
}

const res1 = solution("110"); // 3
console.log(res1);
// const res2 = solution("011"); // 2
// console.log(res2);
