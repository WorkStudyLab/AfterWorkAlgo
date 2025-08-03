// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// 제한 사항
// 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수입니다.
// 작업 속도는 100 이하의 자연수입니다.
// 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

/**
 * 해결 방법
 * 1. 1일마다 전체 작업에 speeds만큼의 값을 더한다.
 * 2. 작업 후 프로세스 큐에 완료된 작업중 100이 된 아이템을 꺼낸다.(FIFO)
 * 3. count값을 저장한다.
 * 4. 0의 값은 제거한다 => 매일 작업이 완료되지는 않음
 */
function solution(progresses, speeds) {
  var answer = [];

  // queue에 작업이 남아 있지 않을 때까지 반복 => 1반복이 1일 경과
  while (progresses.length) {
    let count = 0;

    // 작업 진행
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    // 작업 후 큐에 완료된 작업 shift 및 개수 카운트
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    answer.push(count);
  }
  return answer.filter((data) => data !== 0);
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
