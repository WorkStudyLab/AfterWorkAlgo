function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = Array(bridge_length).fill(0);
  let currentWeight = 0;

  while (truck_weights.length > 0 || currentWeight > 0) {
    // 1. 다리에서 트럭 하나 내보내기
    const exitedTruck = bridge.pop();
    currentWeight -= exitedTruck;

    // 2. 다음 트럭 확인
    const nextTruck = truck_weights[0];

    if (nextTruck !== undefined && currentWeight + nextTruck <= weight) {
      // 트럭 진입 가능
      bridge.unshift(nextTruck);
      currentWeight += nextTruck;
      truck_weights.shift();
    } else {
      // 트럭 진입 불가 → 0 삽입 (시간 경과만)
      bridge.unshift(0);
    }

    // 3. 시간 증가
    time++;
  }

  return time;
}
