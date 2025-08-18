// 1. 소수를 구하는 함수 작성

// 2. 주어진 배열로 만들 수 있는 모든 수의 조합을 구할 수 있는 함수 작성

// 3. 모든 수의 조합을 Set로 저장해서 중복 제거

// 4. 수 조합을 순회하면서 소수 판별 함수 => true +1


// 1. 소수를 구하는 함수 (가져옴)
function isPrimeOptimized(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    // 모든 소수는 6k±1 형태 (2, 3 제외)
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// 2-1. 특정 길이의 순열을 생성하는 함수
function getPermutationsOfLength(arr, length) {
    if (length === 1) {
        return arr.map(item => [item]);
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const smallerPerms = getPermutationsOfLength(remaining, length - 1);

        smallerPerms.forEach(perm => {
            result.push([current, ...perm]);
        });
    }

    return result;
}

// 2-2. 모든 길이의 조합을 생성하는 함수
function getAllCombinations(arr) {
    const result = [];
    
    // 1자리부터 전체 길이까지 모든 길이의 조합 생성
    for (let length = 1; length <= arr.length; length++) {
        const combinations = getPermutationsOfLength(arr, length);
        result.push(...combinations);
    }
    
    return result;
}


function solution(numbers) {
    let answer = 0;

    // 3-1. 주어진 숫자를 배열로 분리
    const n = numbers.split('');

    // console.log(n);

    // 3-2. 주어진 숫자로 만들 수 있는 모든 조합 생성
    const nums = getAllCombinations(n);
    const numSet = new Set();

    // console.log(nums);
    // console.log(nums[0]);
    // console.log(parseInt(nums[0].join('')))

    // 3-3. 주어진 숫자로 만들 수 있는 모든 조합을 정수로 변환하고 Set 에 추가
    for(let i =0; i<nums.length; i++){
        numSet.add(parseInt(nums[i].join('')))
    }

    // console.log(numSet);

    // 4. Set의 각 수에 대해 소수 판별
    for(let num of numSet){
        if(isPrimeOptimized(num)){
            answer += 1;
        }
    }

    return answer;
}

solution("011");
