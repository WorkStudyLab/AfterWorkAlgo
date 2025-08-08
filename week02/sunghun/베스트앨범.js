function solution(genres, plays) {
  const genrePlayMap = {}; // 장르별 총 재생 수
  const genreSongsMap = {}; // 장르별 [재생 수, 고유 번호] 배열
  const answer = [];

  // 1. 데이터 구성
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    // 장르별 총 재생 수 저장
    genrePlayMap[genre] = (genrePlayMap[genre] || 0) + play;

    // 장르별 노래 리스트 저장
    if (!genreSongsMap[genre]) genreSongsMap[genre] = [];
    genreSongsMap[genre].push([play, i]);
  }

  // 2. 총 재생 수 기준으로 장르 정렬
  const sortedGenres = Object.keys(genrePlayMap).sort(
    (a, b) => genrePlayMap[b] - genrePlayMap[a]
  );

  // 3. 각 장르에서 재생 수 top 2만 추출
  for (const genre of sortedGenres) {
    const songs = genreSongsMap[genre];
    let top1 = [-1, -1]; // [재생수, 고유번호]
    let top2 = [-1, -1];

    for (const [play, idx] of songs) {
      // top1 업데이트 조건
      if (play > top1[0] || (play === top1[0] && idx < top1[1])) {
        top2 = top1;
        top1 = [play, idx];
      }
      // top2 업데이트 조건
      else if (play > top2[0] || (play === top2[0] && idx < top2[1])) {
        top2 = [play, idx];
      }
    }

    answer.push(top1[1]);
    if (top2[0] !== -1) answer.push(top2[1]);
  }

  return answer;
}
