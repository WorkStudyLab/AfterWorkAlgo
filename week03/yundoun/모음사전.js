function solution(word) {
    var count = 0;
    let 모음 = ["A", "E", "I", "O", "U"];

    for (let a of 모음){
        count++
        if (a === word) return count;
        for (let b of 모음){
            let w2 = a + b
            count++
            if (w2 === word) return count;
            for (let c of 모음){
                let w3 = w2 + c;
                count++
                if (w3 === word) return count;
                for (let d of 모음){
                    let w4 = w3 + d;
                    count++
                    if (w4 === word) return count;
                    for (let e of 모음){
                        let w5 = w4 + e;
                        count++
                        if (w5 === word) return count;
                    }
                }
            }
        }
    }
}