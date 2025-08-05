/**
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
 * 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 *
 * solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
 * 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 */
function solution(bridge_length, weight, truck_weights) {
  let time = 1;

  let bridge = new Array(bridge_length).fill(0);
  let bridge_weight = truck_weights[0]; // 현재 다리 무게

  bridge[bridge_length - 1] = truck_weights.shift(); // 첫번째 트럭 다리 진입

  while (bridge_weight > 0) {
    bridge_weight -= bridge.shift();

    if (bridge_weight + truck_weights[0] <= weight) {
      bridge_weight += truck_weights[0];
      bridge.push(truck_weights.shift()); // 다리에 트럭 진입
    } else {
      bridge.push(0);
    }

    time++;
  }

  return time;
}
