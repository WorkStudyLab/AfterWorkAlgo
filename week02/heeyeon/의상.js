function solution(clothes) {
  const clothesMap = new Map();

  clothes.forEach(([_, type]) => {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  });

  return (
    [...clothesMap.values()].reduce((acc, count) => acc * (count + 1), 1) - 1
  );
}
