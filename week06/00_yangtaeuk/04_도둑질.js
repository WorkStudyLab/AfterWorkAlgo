/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42897
 *
 * 실패
 *  - 재귀 형태로 풀이할 경우 Maximum Call Stack 문제 발생
 */
function solution(money) {
  const dp = new Map();
  const recursive = (s, e) => {
    const mapKey = `${s},${e}`;
    const dpItem = dp.get(mapKey);
    // dp에 저장된 경우
    if (dpItem) return dpItem;
    if (e < s) return 0;
    // 아이템이 한개인 케이스
    if (e === s) return money[s];
    // 두개인 케이스
    if (e - s === 1) return Math.max(money[s], money[e]);

    const result1 = recursive(s + 2, e);
    const result2 = recursive(s + 3, e);

    const max = Math.max(money[s] + result1, money[s + 1] + result2);
    dp.set(`${s + 2},${e}`, result1);
    dp.set(`${s + 3},${e}`, result2);
    return max;
  };

  // 첫번째걸 선택하는 케이스 : 마지막 아이템은 제외
  const res1 = money[0] + recursive(2, money.length - 2);
  // 마지막 아이템을 선택하는 케이스 : 첫번째 아이템 제외
  const res2 = money[money.length - 1] + recursive(1, money.length - 3);

  return Math.max(res1, res2);
}

// const res1 = solution([1, 2, 3, 1]); // 4
// console.log(res1);
// const res2 = solution([1, 2, 3, 1, 5]); // 8
// console.log(res2);
const res3 = solution([1, 2, 3, 12, 1, 5, 7, 9]); // 28
console.log(res3);
// const res3 = solution(new Array(1_000_000).fill(10)); // 28
// console.log(res3);
