function solution(arr)
{
    var answer = [];

    for (let i = 0; i<arr.length; i++){
        // 순회하는 기준 요소와 그다음 요소가 다를 경우에만 정답 배열에 푸시
        if(arr[i] !== arr[i+1]) answer.push(arr[i])
    }
    
    return answer;
}