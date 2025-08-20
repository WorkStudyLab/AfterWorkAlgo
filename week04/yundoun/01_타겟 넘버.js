// dfs 풀이법


function solution(numbers, target) {
    var count = 0;
    
    function dfs (idx, sum){
        
        if (idx === numbers.length){
            if (sum === target ) {
                count++ // 합이 target이면 카운트 증가        
            }
            return count;
        }
        dfs(idx + 1, sum + numbers[idx] )
        dfs(idx + 1, sum - numbers[idx])
    }
    
    dfs(0,0)
    
    return count;
}

---

// bfs -> 답은 맞지만 시간 초과 발생


function solution(numbers, target) {
    var count = 0;
    let que = [[0,0]];
    
while (que.length > 0) {
    let [idx, sum] = que.shift();

    if (idx === numbers.length) { // 숫자 다 계산했다는 의미
        if (sum === target) count++; // 해당값이면 카운트
    } else {
        que.push([idx + 1, sum + numbers[idx]]);
        que.push([idx + 1, sum - numbers[idx]]);
    }
}

    
    return count;
}
