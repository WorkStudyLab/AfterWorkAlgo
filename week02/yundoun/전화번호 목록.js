// 실패한 코드

// 채점 결과
// 정확성: 83.3
// 효율성: 8.3
// 합계: 91.7 / 100.0

function solution(phone_book) {
    
    for (let i = 0; i < phone_book.length; i++){
        for (let j=i+1; j< phone_book.length; j++){
            if(phone_book[i].startsWith(phone_book[j]) || phone_book[j].startsWith(phone_book[i]) ){
                return false;
            }
        }
    }
    
    return true;
}

---

// 사전 순 정렬하니까 통과함
function solution(phone_book) {
    phone_book.sort();  // 사전순 정렬
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i+1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}

---

// 해시를 이용한 방법
function solution(phone_book) {
    // 탐색 속도가 빠른 해시 테이블 생성
    let hash = new Set(phone_book)

    // 배열에서 아이템 하나씩 가져옴
    for (let number of phone_book){
        for (let i=1; i<number.length; i++){
            let prefix = number.slice(0,i)
            // 접두어 발견하면 false 리턴
            if(hash.has(prefix)){
                return false;
            }
        }
    }
    
    
    return true;
}