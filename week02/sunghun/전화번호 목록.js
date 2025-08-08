function solution(phone_book) {
  const phoneMap = new Map();

  // 전화번호를 해시맵에 저장
  for (let phone of phone_book) {
    phoneMap.set(phone, 1);
  }

  for (let phone of phone_book) {
    let temp = "";
    for (let number of phone) {
      temp += number;
      // 전화번호의 접두사가 해시맵에 있고, 현재 전화번호와 다른 경우
      if (phoneMap.has(temp) && temp !== phone) {
        return false;
      }
    }
  }
  return true;
}
