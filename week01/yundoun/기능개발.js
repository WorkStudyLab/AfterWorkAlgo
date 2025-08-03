function solution(progresses, speeds) {
    var answer = [];
    let remain = [];
    // 1. progresses과 speeds를 순회하면서 remain이라는 배열에 남은 기간을 저장한다.
    // 2. 반복문에 remain을 순회한다
    // 3. 첫번째 인덱스부터 어떤 변수에 값을 저장하면서 해당 변수보다 큰 값이 나올때까지 순회한다. 이때 cnt로 배포 날짜를 계산한다.
    // 4. 큰 값이 나오면 cnt의 값을 answer에 push한다.
    
    for (let i =0; i<progresses.length; i++){
        // 남은 작업 값
        let remainValue = (100-progresses[i])
        // 걸리는 시간, ceil는 소수점이 있을 경우 무조건 올림
        let workTime = Math.ceil(remainValue/speeds[i])
        remain.push(workTime)
    }
    
    console.log(remain)
    
    for (let i = 0; i<remain.length; i++){
        let j = 0
        let cnt = 1;
        let max = remain[i];
        for (j = i+1; j<remain.length; j++){
            // 앞선 작업보다 시간이 적게 걸리면 카운트, 같은 날에 완료되는 경우까지 포함
            if (max >= remain[j]){
                cnt++
            } 
            // 많이 걸리면 배포하고 다시 계산
            else{
                break
            }
        }
        answer.push(cnt)
        // 카운트 한 것은 제외하고 i가 돌아갈 수 있도록 초기화 해주기
        i = j-1
    }
    
    return answer;
}