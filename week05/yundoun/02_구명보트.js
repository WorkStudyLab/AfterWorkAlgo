function solution(people, limit) {
    var answer = 0;
    
    // 오름차순 정렬
    let p = people.sort((a,b) => a-b);
    // 배열 양쪽 끝에서 탐색하기 위한 인덱스
    let start = 0;
    let end = p.length -1;
    
    // 무인도 탈출하면 배열에서 제거
    while(start <= end){
        if (p[start] + p[end] <= limit){
            //탈출
            start++
            end--;
        }else{
            // 제일 무거운사람 탈출
            end--
        }
        answer++
    }
    
    return answer;
}