function solution(bridge_length, weight, truck_weights) {
    
    // 다리의 길이가 걸리는 시간, 즉 트럭이 소모하는 초가되며
    // 1. 트럭의 합이 브릿지의 weight보다 초과일 경우 뒷 트럭은 무기한 대기해야한다.
    // 2. 최대 트럭의 개수는 다리의 길이와 같다.
    
    // 일차선 다리
    let bridge = Array(bridge_length).fill(0)
    
    // 초
    let time = 0
    // 다리 위의 트럭 무게
    let totalWeight = 0
    
    // while문 조건
    // 1. 대기 트럭이 남아 있을 경우
    // 2. 다리에 트럭이 있을 경우
    while(truck_weights.length > 0 || totalWeight > 0){
        time++
        totalWeight -= bridge.shift()
        
        // 대기하는 트럭이 있을 경우 트럭 올라감
        if (truck_weights.length > 0){
            // 현재 다리 위의 트럭 총합과 새로 올라갈 트럭의 무게 합이 weight를 넘지 않아야함
            if (totalWeight + truck_weights[0] <= weight){
                let truck = truck_weights.shift()
                bridge.push(truck)
                totalWeight += truck
            } else {
                bridge.push(0) // 무게 넘치면 대기
            }
        }
        else {
            bridge.push(0) // 대기 트럭 없을 경우 시간 흐르게
        }
    }
    
    return time;
}