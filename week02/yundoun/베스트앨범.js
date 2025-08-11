// {
//   "classic": {
//      song : [
//          { id : 1, plays : 700 },
//          { id : 2, plays : 100 },
//          ...
//      ],
//      totalPlays : 0
//    }
//   "pop": {}
//     
//     
//   }
// }


function solution(genres, plays) {
    let hash = new Map();
    let answer = [];
    
    for (let i =0; i<genres.length; i++){
        let genre = genres[i];
        let play = plays[i];
        
        // 초기화
        if (!hash.has(genre)){
            hash.set(genre, {song : [], totalPlays : 0})
        }
        
        // 인덱스랑 횟수 넣기
        // 배열이니까 set 말고 push
        hash.get(genre).song.push({id : i, plays : play})
    }
    
    console.log(hash)
    
    // 1. 장르별 재생횟수 계산
    for([genre, value] of hash){
        let sum = 0
        for (let song of value.song){
            sum += song.plays
        }
        value.totalPlays = sum;
    }   


    // 2. 장르별 노래 정렬
    for (let [genre, value] of hash){
        value.song.sort((a,b)=>{
            if (b.plays !== a.plays) return b.plays - a.plays
            return a.id - b.id;
        })
    }
    
    // 3. 장르를 totalPlays 내림차순으로 정렬
    let genreSorted = Array.from(hash.entries()).sort((a,b) => b[1].totalPlays - a[1].totalPlays)

    
    // 4. answer 배열에 푸시
    for (let [genre, value] of genreSorted){
        for (let i =0; i< Math.min(2, value.song.length); i++){
            answer.push(value.song[i].id);
        }
    }
    return answer;
}