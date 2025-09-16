/*
1. 원형 배열을 신경쓰지 않고, 일직선 배열인 경우를 가정
  dp[i] = i 번째 집까지 고려했을 때 훔칠 수 있는 돈의 최댓값

  i 번째 집 앞에 섰을때 선택할 수 있는 경우 2가지
    a. i 번째 집을 턴다.
    b. i 번째 집을 털지 않는다.

  a, 즉 i 번째 집을 털 경우, i-1 번째 집을 털 수 없다.
  따라서 a 의 경우는 최대로 털 수 있는 돈은
    money[i] : i 번째 집의 돈
    + dp[i-2] : i-2 번째 집 까지 고려했을때 훔칠 수 있는 돈의 최댓값
  이 된다.

  b, 즉 i 번째 집을 털지 않을 경우엔, i-1 번째 집까지 털었을 경우의 최댓값이 유지된다.
  따라서 b 의 경우에 최대로 털 수 있는 돈은 dp[i-1] 이 된다.

  여기서 둘 중 더 큰 값을 골라야 하니까. 
  dp[i] = Math.max(money[i]+dp[i-2], dp[i-1]) 이 된다.

2. 원형 배열인 것을 고려
  원형 배열인 것을 고려할 경우, 한 가지 상황을 더 고려해야 하는데
  첫 번째 집과, 마지막 집이 이웃한다는 것이다.
  따라서 첫 번째 집을 선택하면 마지막 집을 절대 선택할 수 없고,
  마지막 집을 선택하면 첫 번째 집을 절대 선택할 수 없다.

  그렇다면 두 가지 경우가 생긴다.
    a. 첫 번째 집을 선택, 마지막 집을 제외 (array[0] ~ array[length-2])
    b. 마지막 집을 선택, 첫 번째 집을 제외 (array[1] ~ array[length-1])

이제 1 에서 구한 dp[i] 공식을
2 에서 구한 a,b 상황에 각각 적용해 주고, 
그 결과 나온 두 값중 더 큰 값을 반환하면 답이 된다.
*/

function solution(money) {
  const robLinear = (nums) => {
    if (nums.length === 0) return 0;

    let prev1 = 0;
    let prev2 = 0;

    for (const num of nums) {
      const temp = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = temp;
    }

    return prev1;
  };

  if (money.length === 1) return money[0];

  const max1 = robLinear(money.slice(0, money.length - 1));
  const max2 = robLinear(money.slice(1));

  return Math.max(max1, max2);
}
