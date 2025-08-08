function solution(clothes) {
  let answer = 1;
  const obj = {};

  for (let arr of clothes) {
    if (!obj[arr[1]]) {
      obj[arr[1]] = 1;
    } else {
      obj[arr[1]]++;
    }
  }

  let result = Object.values(obj);

  for (let i = result.length; i--; ) {
    answer *= result[i] + 1;
  }

  return answer - 1;
}
