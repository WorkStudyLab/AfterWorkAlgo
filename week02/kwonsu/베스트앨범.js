const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

// 1. 사고
// Hash( Key = 장르, Value ({총 재생수, 노래[{고유 번호, 재생수},{고유 번호, 재생수}...])
//   a. 장르별 총 재생 수와 노래 정보를 Map에 저장
//   b. 장르를 총 재생 수 기준으로 내림차순 정렬
//   c. 각 장르 내에서 노래를 정렬하고 상위 2곡 선택

// 2. 구현
function solution(genres,plays){
    const answer = [];

    // 1. 장르별 총 재숭 수와 노래 정보 Map 생성
    const genreData = new Map();
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!genreData.has(genre)) {
            genreData.set(genre, {total: 0, songs: []});
        }

        // 현재 index(고유 번호)에 해당하는 장르의 재생 횟수를 총 재생 횟수에 더하고
        // 노래 정보(고유번호, 재생횟수)를 songs에 추가
        const currentGenre = genreData.get(genre);
        currentGenre.total += play;
        currentGenre.songs.push({id: i, plays: play});
    }

    // 2. 장르를 총 재생 수 기준으로 내림차순 정렬한 배열 생성
    const sortedGenres = Array.from(genreData.values()).sort(
        (a, b) => b.total - a.total
    );

    // 3. 각 장르 내에서 노래를 정렬(재생 횟수, 고유 번호 기준)하고 상위 2곡 선택
    for (const genreInfo of sortedGenres) {
        genreInfo.songs.sort((a, b) => {
            // 재생 수가 같을 때 고유 번호 낮은 순으로 정렬
            if (a.plays === b.plays) {
                return a.id - b.id;
            }
            // 재생 수로 정렬
            return b.plays - a.plays;
        });

        // 상위 2곡의 id를 answer에 추가
        // Math.min(genreInfo.songs.length, 2) 는 곡이 1개일 경우를 대비
        for (let i = 0; i < Math.min(genreInfo.songs.length, 2); i++) {
            answer.push(genreInfo.songs[i].id);
        }
    }

    return answer;
}

console.log(solution(genres,plays));

// 3. 시행 착오
// - [play, index], [play, genre] 등 play 수에 맞춰 map을 구성하려고 함.
// - "모든 장르는 재생된 횟수가 다릅니다." 라는게 총 재생 횟수를 뜻 한다는 걸 뒤늦게 깨달음.
// - play 수 정렬은 성공했으나 같은 play 가 같은 경우 genre 구분이 안됨
// - 모든 정보를 하나의 Map으로 구성하고 관리하기로 생각 전환
//
// const totalPlaysByGenres = new Map();
// const playsByGenre = new Map();
// const playByIndex = new Map();
// const genreByIndex = new Map();
//
// for (let i = 0; i < genres.length; i++) {
//     const g = genres[i];
//     const p = plays[i];
//     totalPlaysByGenres.set(g, (totalPlaysByGenres.get(g) || 0) + p)
//     playByIndex.set(p, i);
//     genreByIndex.set(i, g);
//     playsByGenre.set(p, g);
// }
//
// console.log(totalPlaysByGenres);
// console.log(playByIndex);
// console.log(genreByIndex);
//
// const entries = Array.from(totalPlaysByGenres);
//
// console.log(entries)
//
// entries.sort((a, b) => b[1] - a[1]);
//
// console.log(entries)
//
// const sortedGenres = entries.map(entry => entry[0]);
//
// console.log(sortedGenres);
//
// console.log(playsByGenre);
//
// const answer = [];
//
// for (const genre of sortedGenres) {
//     const plays = findTopTwoKeys(playsByGenre,genre);
//     for (const play of plays){
//         console.log(play);
//         answer.push(playByIndex.get(play));
//     }
// }
//
// console.log(`answer ${answer}`);
//
//
// function findTopTwoKeys(map, targetValue) {
//     const matchingKeys = [];
//     for (const [key, value] of map.entries()) {
//         if (value === targetValue) {
//             matchingKeys.push(key);
//         }
//     }
//
//     const sortedKeys = matchingKeys.sort((a, b) => b - a);
//
//     return sortedKeys.slice(0, 2);
// }