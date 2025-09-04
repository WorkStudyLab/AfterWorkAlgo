// 이 문제는 최대값이 10억이라 시간초과 난다고함
// 고로 이분탐색 써야댐

function solution(n, times) {
    var answer = 0;
    
    // 시작 최소값은 말이 안되더라도 일단 가장 작게 잡으면 된다네
    let min = 1;
    // 가장 시간이 많이 걸리는 경우는 10분 탐색대에서 6명이 모두 했을 경우 60분임
    let max =  Math.max(...times) * n;
    
    while(min <= max){
        // 이분탐색 중간값
        let mid = Math.floor((min + max) /2)
        
        let 처리가능인원 = 0;
        
        for(let i=0; i< times.length; i++){
            처리가능인원 += Math.floor(mid/times[i]) // 소수점 안나오게
        }
        
        if (처리가능인원 >= n){
            // 시간이 충분한 경우 -> 답 후보 지정하고 왼쪽 탐색
            answer = mid;
            max = mid -1
        } else{
            // 시간이 부족한 경우 -> 오른쪽 탐색
            min = mid + 1
        }
        
    }
    
    return answer;
}