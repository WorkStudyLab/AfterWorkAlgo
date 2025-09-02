function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => a - b);
  
    let leftIndex = 0;
    let rightIndex = sortedPeople.length - 1;
    let boats = 0;
  
    // 모든 사람이 출발한 경우 (오른쪽 인덱스가 왼쪽 인덱스와 만나거나 왼쪽인덱스보다 작이지면 모두 간 경우)
    while (leftIndex <= rightIndex) {
      if (sortedPeople[leftIndex] + sortedPeople[rightIndex] <= limit) {
        leftIndex++;
        rightIndex--;
      } else {
        rightIndex--;
      }
      boats++;
    }
    return boats;
  }