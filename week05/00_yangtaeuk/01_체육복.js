/**
 * 옛날에 풀어놨던데 너무 어렵게 풀어놔서 뭔지 모르겠음..
 */

function lostFunc(arr, lostArr) {
  for (let i = 0; i < lostArr.length; i++) {
    arr[lostArr[i] - 1] = arr[lostArr[i] - 1] - 1;
  }

  return arr;
}

function reserveFunc(arr, reservArr) {
  for (let i = 0; i < reservArr.length; i++) {
    arr[reservArr[i] - 1] = arr[reservArr[i] - 1] + 1;
  }

  return arr;
}

function borrowFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i - 1] === 2) {
        arr[i] += 1;
        arr[i - 1] -= 1;
      } else if (arr[i + 1] === 2) {
        arr[i] += 1;
        arr[i + 1] -= 1;
      }
    }
  }
}

function solution(n, lost, reserve) {
  const studentArr = new Array(n).fill(1);
  lostFunc(studentArr, lost);
  reserveFunc(studentArr, reserve);
  borrowFunc(studentArr);

  return studentArr.filter((val) => val !== 0).length;
}
