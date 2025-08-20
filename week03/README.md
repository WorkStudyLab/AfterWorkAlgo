## 주제: 완전탐색 / 브루트포스


### 1. 모의고사 (LV1)
- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42840

### 2. 소수 찾기 (LV2) 
- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42839

### 3. 카펫 (LV2) 
- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42842

### 4. 전력망을 둘로 나누기 (LV2)
- 문제 링크: [https://school.programmers.co.kr/learn/courses/30/lessons/42862](https://school.programmers.co.kr/learn/courses/30/lessons/86971)

### 5. 모음사전 (LV2)
- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/84512

---

## 참고 자료  

N/A

---

## 스터디 정보  
- **날짜**: 2025.08.19(화)
- **시간**: 오후 10:00 ~ 11:15
- **장소**: 온라인(디스코드)
<img width="2881" height="1690" alt="image" src="https://github.com/user-attachments/assets/0703776f-61d9-4ad1-a47d-d163ae0bfcff" />

---

## 발표자  
- 모의고사(LV1) : 김권수
- 소수 찾기(LV2) : 백승훈
- 카펫(LV2) : 윤도운
- 전력망을 둘로 나누기(LV2) : 양태욱
- 모음사전(LV2) : 박희연

---

## 스터디 내용  
1. 세 수포자의 답안 패턴을 answers 길이만큼 모듈러로 반복해 전부 비교·카운트하고, 최댓값을 받은 사람의 번호만 오름차순으로 반환한다.
2. 주어진 숫자 조각들을 모든 길이와 순서로 순열 생성 → 정수로 변환 → 중복 제거 → 소수 판별 → 개수 세기 방식으로 완전탐색한다.
3. 가능한 전체 격자 크기(가로×세로 = brown+yellow)를 약수 쌍으로 전부 탐색하며, (가로−2)×(세로−2) == yellow 를 만족하는 쌍을 찾아 반환한다.
4. 모든 전선을 하나씩 끊어보며(간선 제외 인접리스트 구성) 각 경우마다 DFS/BFS로 한 컴포넌트의 노드 수를 세고 n-그수와의 차이를 구해 그 최소값을 반환한다.
5. 'AEIOU'로 길이 ≤5 모든 단어를 사전순(DFS/백트래킹)으로 생성·카운트하다가 word가 나오면 그때의 누적 순번을 반환한다. 또는 가능한 모든 경우를 중첩 반복문을 통해 계산한다.
---

## 다음 주 계획  

📌 4주차: DFS / BFS

타겟 넘버
https://school.programmers.co.kr/learn/courses/30/lessons/43165

네트워크
https://school.programmers.co.kr/learn/courses/30/lessons/43162

단어 변환
https://school.programmers.co.kr/learn/courses/30/lessons/43163

게임 맵 최단거리
https://school.programmers.co.kr/learn/courses/30/lessons/1844
