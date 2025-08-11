function solution(genres, plays) {
  const genreMap = new Map();
  const playMap = new Map();

  genres.forEach((genre, idx) => {
    const playCount = plays[idx];

    genreMap.set(genre, (genreMap.get(genre) || 0) + playCount);

    if (!playMap.has(genre)) playMap.set(genre, []);
    playMap.get(genre).push({ id: idx, playCount });
  });

  const sortedGenres = [...genreMap.entries()]
    .sort((a, b) => b[1] - a[1]) // 재생 횟수 내림차순 정렬
    .map((entry) => entry[0]); // 장르 이름만 추출

  const bestAlbum = [];

  sortedGenres.forEach((genre) => {
    const songs = playMap
      .get(genre)
      .sort((a, b) => b.playCount - a.playCount || a.id - b.id) // 재생 횟수 내림차순, 고유번호 오름차순
      .slice(0, 2); // 최대 2곡 선택

    bestAlbum.push(...songs.map((song) => song.id));
  });

  return bestAlbum;
}
