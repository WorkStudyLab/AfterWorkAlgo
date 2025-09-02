function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  let i = 0; // 원본 배열의 "헤드" 인덱스
  const mixed = []; // 섞어서 생긴 값들 저장 (비내림차순)
  let j = 0; // mixed 큐의 "헤드" 인덱스
  let count = 0;

  const n = scoville.length;

  // 현재 전역 최소 가져오기 (원본 i, mixed j 중 작은 쪽)
  const getMin = () => {
    const fromOrig = i < n ? scoville[i] : Infinity;
    const fromMix = j < mixed.length ? mixed[j] : Infinity;
    if (fromOrig <= fromMix) {
      i++;
      return fromOrig;
    }
    j++;
    return fromMix;
  };

  // 현재 전역 최소값 조회(소비하지 않고 보기)
  const peekMin = () => {
    const fromOrig = i < n ? scoville[i] : Infinity;
    const fromMix = j < mixed.length ? mixed[j] : Infinity;
    return Math.min(fromOrig, fromMix);
  };

  while (true) {
    const minVal = peekMin();
    if (minVal >= K) return count;

    // 더 뽑을 게 없다면 불가
    const totalRemain = n - i + (mixed.length - j);
    if (totalRemain < 2) return -1;

    const a = getMin();
    const b = getMin();
    mixed.push(a + b * 2);
    count++;
  }
}
