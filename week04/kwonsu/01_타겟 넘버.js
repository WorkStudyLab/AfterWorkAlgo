// dfs 를 활용해서 모든 경우를 탐색

function solution(arr, n) {
  let answer = 0;

  // depth 는 말 그대로 현재 가리키고 있는 node의 depth를 말함
  // currentSum 현재 지나온 node의 합
  function dfs(depth, currentSum) {
    // 종료 조건 : depth 가 arr.length와 같아진 경우 = 모든 숫자를 더하고 난 다음
    if (depth === arr.length) {
      if (currentSum === n) {
        answer++;
      }
    } else {
      // 다음 depth로 가는 재귀 함수 호출 부분
      // + 와 - 의 경우를 동시에 호출하지만, + 를 먼저 호출 했기 때문에
      // +,+,+... 의 경우가 먼저 완료되고, +,+,+...- 와 같이 dfs 가 진행됨.
      dfs(depth + 1, currentSum + arr[depth]);
      dfs(depth + 1, currentSum - arr[depth]);
    }
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));

// const arr = [4,1,2,1]
//
// const f_arr = arr[0];
// const slice_arr = arr.slice(1);
// const plus_arr = arr
// const minus_arr = [-f_arr,slice_arr];
//
// console.log(`${plus_arr}, ${minus_arr}`);
//
//
// console.log(`${f_arr},  ${slice_arr}`);
