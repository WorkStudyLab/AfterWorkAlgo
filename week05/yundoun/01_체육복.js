function solution(n, lost, reserve) {
    var answer = 0;
    
    
    // 정렬이 왜 필요한거지?
    // 진짜 체육복이 필요한 학생들 필터링
    let filteredLost = lost.filter((m) => !reserve.includes(m)).sort((a,b) => a-b)
    console.log(filteredLost)
    // 진짜 체육복을 빌려줄 수 있는 학생들만 필터링
    let filteredReserve = reserve.filter((m) => !lost.includes(m)).sort((a,b) => a-b)
    console.log(filteredReserve)
    
    // 잃어버린 학생 수 만큼 순회
    for (let i = 0 ; i< filteredLost.length; i++){
        // 체육복 빌려주는 사람 기준으 -1로 설정
        let target = filteredLost[i] - 1
        
        // -1 했을때 0보다 크고 빌려줄 수 있을때
        if(target > 0 && filteredReserve.includes(target)) 
        {
            // 해당값 찾아서 삭-제
            let idx = filteredReserve.indexOf(target)
            filteredReserve.splice(idx, 1)
        }
        else if (filteredReserve.includes(target+2)){
         // +1 했을 때 
            let idx = filteredReserve.indexOf(target+2)
            filteredReserve.splice(idx, 1)
        }
        else {
            //빌릴 수 없을 때 카운트
            answer++
        }

    
    }
    
    
    return n-answer ;
}