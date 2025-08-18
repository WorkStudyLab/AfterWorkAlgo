function solution(brown, yellow) {
    
    // 노란색의 가로 세로 w, h
    // 전체 크기는 항상 W = w+2, H = H + 2
    // 전체 카펫의 크기는 W*H
    // 갈색의 개수는 전체 - 노란색
    // brown = W * H - w*h
    // brown = (w + 2)(h + 2) - w*h
    // brown = 2(w + h + 2)
    // 노란색은 직사각형이니까 yellow = w * h
    // w = yellow/h
    // brown = 2(yello/h + h + 2)
    // brown = 2(yello/h) + 2h + 4
    // brown/2 = yello/h + h + 2
    // yello/h + h = brown/2 - 2
    let W = 0, H = 0;
    let target = brown/2 - 2
    for (let h = 1; h <= yellow; h++){
        if (yellow/h + h === target){
            W = yellow/h + 2;
            H = h + 2;
            break;
        }
    }
    
    return [Math.max(W,H), Math.min(W,H)];
}