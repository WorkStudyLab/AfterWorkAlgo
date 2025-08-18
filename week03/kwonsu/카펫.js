// 1. 카펫의 전체 가로 길이를 w, 세로 길이를 h 라고 했을때
//    테두리는 1줄 이므로, 중앙 노란색 격자 부분의
//    가로 길이는 전체 가로 길이 w - 2 (양쪽 테두리 1칸씩) 세로 길이는 h - 2 가 됩니다.
//    따라서 (w-2) * (h-2) = yellow 가 됩니다.

// 2. 전체 격자의 수는 brown + yellow 입니다.
//    전체 격자의 수는 w * h 이기도 합니다.
//    따라서 w * h = brown + yellow 가 됩니다.

// 3. w 가 h 보다 길다는 조건이 있기 때문에
//    h 는 total(brown+yellow)의 제곱근 보다 작거나 같아야 합니다.


// 4. total의 제곱근 보다 작은 h 중에 total % h 가 0 이면서,
//    (w-2) * (h-2) = yellow 를 만족하는 h 를 찾으면 됩니다.
//    여기서 w 는 total/h 를 사용합니다.


function solution(brown,yellow){
    // 전체 격자의 수
    const total = brown + yellow;

    let width = 0;
    let height = 0;

    // 전체 격자의 수의 제곱근 보다 수 중 total%h===0 을 만족하는 h 찾기
    for(let h =3; h<=Math.sqrt(total);h++){
        if(total%h === 0){
            let w = total/h;
            // 위 조건을 만족하면서 두 번째 조건을 만족하는지 판별
            if((w-2) * (h-2) === yellow){
                width = w;
                height = h;
            }
        }
    }

    return [width,height];
}

console.log(solution(8,1));