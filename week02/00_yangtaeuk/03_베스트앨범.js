/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 * 1. 클래스 생성
 *  - Song
 *    + 인덱스: number
 *    + 재생횟수: number
 *  - SongList
 *    + 총 재생 횟수: String
 *    + Song[]
 *    + getBest : function() => 재생횟수 상위 2개 (없으면 1개)
 *
 * 2. Map 객체 생성
 *  - Map(category, SongList)
 * 3. 객체별 총 재생횟수 비교(배열 형태로 변경)
 * 4. 상위 객체부터 getBest 및 answer push
 */

class Song {
  constructor(idx, count) {
    this.index = idx;
    this.songCount = count;
  }
}

class SongList {
  constructor(category) {
    this.category = category;
    this.allCount = 0; // 해당 카테고리의 총 재생 횟수
    this.songs = []; // Song 객체 배열
  }

  /** Song배열에서 count를 이용하여 베스트 선정 : idx반환 */
  getBest() {
    return this.songs
      .sort((a, b) => b.songCount - a.songCount)
      .slice(0, 2)
      .map((item) => item.index);
  }

  push(song) {
    this.songs.push(song);
    this.allCount += song.songCount;
  }
}

function solution(genres, plays) {
  const mapObj = new Map();
  var answer = [];
  for (let i = 0; i < genres.length; i++) {
    const songCategory = genres[i];
    const playcount = plays[i];

    const song = new Song(i, playcount);
    // 노래 카테고리를 통해서 리스트를 가져온다.
    const songList = mapObj.get(songCategory);
    if (songList) {
      songList.push(song);
    } else {
      const newSongList = new SongList(songCategory);
      newSongList.push(song);
      mapObj.set(songCategory, newSongList);
    }
  }

  // map 객체 => 배열로 변환
  const arr = Array.from(mapObj.values());
  const sortArr = arr.sort((a, b) => b.allCount - a.allCount);
  console.log(sortArr);
  return sortArr
    .map((item) => item.getBest())
    .reduce((prev, cur) => [...prev, ...cur]);
}

const res = solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
); // [4, 1, 3, 0]

console.log(res);
