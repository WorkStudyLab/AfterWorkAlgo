function solution(prices) {
    var answer = [];
    
    for (let i = 0; i<prices.length; i++){
        let cnt = 0;
        
        // 순회하는 가격의 다음 가격부터 체크
        for (let j = i+1; j<prices.length; j++){
            cnt++
            // 가격이 떨어졌다면 카운트 종료
            if (prices[i] > prices[j]) {
                break;
            }
        }
        // 카운트 한 것 정답 배열에 푸시
        answer.push(cnt);
    }
    
    return answer;
}