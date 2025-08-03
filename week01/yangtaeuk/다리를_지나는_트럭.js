/**
 * 해결 방법
 * 1. 다리 길이만큼의 큐 생성
 * 2. 다리 위 트럭들 한칸씩 앞으로
 * 3. 다리위에 진입 가능 판단 (현재 다리위 무게 + 다음 트럭 무게 <= weight)
 * 4. 진입 가능하다면 : 다리위에 트럭 추가 및 트럭 배열에서 트럭 shift
 */
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let queue = Array(bridge_length).fill(0);

  // 반복 종료 조건 : 트럭 배열에 남은 트럭이 없거나, 다리위의 무게가 0이 된다면 종료
  while (truck_weights.length || queue.reduce((acc, cur) => acc + cur, 0) > 0) {
    // 1초 지남
    answer++;

    // 트럭 한칸씩 앞으로
    queue.unshift(0);
    queue = queue.slice(0, bridge_length);

    // 다리위 총 무게
    const totalWeight = queue.reduce((acc, cur) => acc + cur, 0);
    // 다리위 총 무게 + 다음 트럭 무게
    const nextTotalWeight = totalWeight + truck_weights[0];

    // 진입 가능하다면 : 트럭배열 트럭 제거 + 다리위에 트럭 추가
    if (weight >= nextTotalWeight) {
      const newTruck = truck_weights.shift();
      queue[0] = newTruck;
    }
  }
  return answer;
}
