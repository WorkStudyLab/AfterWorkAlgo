/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 *
 * BFS + Queue
 *
 */
class Field {
  constructor(y, x, yLength, xLength) {
    this.y = y;
    this.x = x;
    this.yLength = yLength;
    this.xLength = xLength;
    this.visited = false;
    this.isGoal = x === xLength - 1 && y === yLength - 1;
    this.count = 0;
  }

  // 현재 위치 기준 동서남북 검사
  getNextFields(board) {
    // console.log(this.y, this.x, board);
    const south = this.y + 1 < this.yLength ? board[this.y + 1][this.x] : 0;
    const north = this.y - 1 >= 0 ? board[this.y - 1][this.x] : 0;
    const east = board[this.y][this.x + 1];
    const west = board[this.y][this.x - 1];

    // 진행 가능한 부분만 추출
    const news = [south, north, east, west].filter((field) => {
      return field instanceof Field && !field.visited;
    });
    return news;
  }

  visit() {
    this.visited = true;
  }
}

class Stone {}

function solution(maps) {
  const fieldMaps = maps.map((row, y) => {
    return row.map((field, x) => {
      if (field === 0) return new Stone();
      else return new Field(y, x, maps.length, row.length);
    });
  });

  const startField = fieldMaps[0][0];
  startField.count++;
  startField.visit();
  const queue = [startField];
  let queueCounter = 0;
  while (queue[queueCounter]) {
    const field = queue[queueCounter];
    queueCounter++;
    // console.log(fieldMaps);
    const nextFields = field.getNextFields(fieldMaps);

    for (let i = 0; i < nextFields.length; i++) {
      const nextField = nextFields[i];
      nextField.count = field.count + 1;
      nextField.visit();

      if (nextField.isGoal) return nextField.count;
      queue.push(nextField);
    }
  }

  return -1;
}
// const res1 = solution([
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 1],
// ]); //11
// console.log("res1 : ", res1);
// const res2 = solution([
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1],
// ]); // -1
// console.log("res2 : ", res2);
console.time("test");
const testData = new Array(100).fill(new Array(100).fill(1));

const res3 = solution(testData); // -1
console.log("res3 : ", res3);
console.timeEnd("test");
