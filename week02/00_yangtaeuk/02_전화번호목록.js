// => 효울성 문제 실패
// function solution(phone_book = []) {
//   phone_book.sort();
//   console.log(phone_book);
//   for (let i = 0; i < phone_book.length; i++) {
//     const number = phone_book[i];

//     for (let j = 0; j < phone_book.length; j++) {
//       const compareNumber = phone_book[j];
//       if (i !== j && compareNumber.startsWith(number)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// => 효울성 문제 실패
// function solution(phone_book = []) {
//   const map = new Map();

//   for (let i = 0; i < phone_book.length; i++) {
//     const phoneNumber = phone_book[i];

//     const firstLetter = phoneNumber[0];
//     const letterList = map.get(firstLetter);

//     if (letterList) letterList.push(phoneNumber);
//     else map.set(firstLetter, [phoneNumber]);
//   }

//   for (let i = 0; i < phone_book.length; i++) {
//     const phoneNumber = phone_book[i];

//     const firstLetter = phoneNumber[0];
//     const letterList = map.get(firstLetter);

//     for (let j = 0; j < letterList.length; j++) {
//       const compareNumber = letterList[j];
//       console.log(compareNumber, phoneNumber);
//       if (
//         phoneNumber !== compareNumber &&
//         compareNumber.startsWith(phoneNumber)
//       ) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// 1. 순회하면서 pop
// 2. map에서 해당 시작 글자를 찾아 배열에서 중복되는게 있는지 확인
// 3. 배열에 push
// => 효울성 문제 실패
// function solution(phone_book = []) {
//   const map = new Map();
//   while (phone_book.length) {
//     const phoneNumber = phone_book.pop();

//     const firstLetter = phoneNumber[0];
//     const letterList = map.get(firstLetter);

//     if (letterList) {
//       for (let i = 0; i < letterList.length; i++) {
//         const comparenumber = letterList[i];
//         if (
//           comparenumber.startsWith(phoneNumber) ||
//           phoneNumber.startsWith(comparenumber)
//         ) {
//           return false;
//         }
//       }
//       letterList.push(phoneNumber);
//     } else map.set(firstLetter, [phoneNumber]);
//   }
//   return true;
// }

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 *
 * 아이디어
 * - 모든 아이템을 앞에서부터 한글자씩 잘라서 객체에 flag값 저장
 * - 이번 회차에 모든 글자를 포함했는데 flag값이 true라면 리턴
 *
 * 1. 최대 글자는 20글자이므로 20번 반복
 * 2. 모든 아이템 순회하면서 글자 slice
 * 3. 이번 회차에 끝나는 아이템은 체크용 배열 삽입
 * 4. 이번 회차에 끝나지 않는 (slice된 글자보다 긴) 아이템은 비교용 obj 삽입
 * 5. 3번에서 체크 되어 있던 배열과 4번의 flag 객체를 비교
 * 6. 일치하는 아이템이 있다면 return
 */
function solution(phone_book = []) {
  const obj = {};
  // 최대 20글자
  for (let i = 0; i < 20; i++) {
    const checkArr = []; // 이번 회차에 끝난 아이템들

    for (let j = 0; j < phone_book.length; j++) {
      const checkNum = phone_book[j];
      const compareNum = checkNum.slice(0, i + 1);

      if (compareNum === checkNum) {
        checkArr.push(checkNum);
      } else {
        obj[compareNum] = true;
      }
    }

    for (let j = 0; j < checkArr.length; j++) {
      const checkNum = checkArr[j];
      if (!!obj[checkNum]) return false;
    }
  }
  console.log(obj);
  return true;
}

const res1 = solution(["119", "97674223", "1195524421"]); // false
const res2 = solution(["123", "456", "789"]); // true
const res3 = solution(["12", "123", "1235", "567", "88"]); // false

console.log(res1);
console.log(res2);
console.log(res3);
