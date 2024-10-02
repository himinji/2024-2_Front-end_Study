## [자기소개 페이지](https://illustrious-daffodil-7824e7.netlify.app)


# CSS(Cascading Sheets Style)
* 인라인 (inline) 스타일: 태그에 직접적으로 스타일을 입히는 방식
  * 태그에 <style>로 구현
* 내부 (internal) 스타일: HTML 문서 내부에 style 태그를 사용하여 스타일을 지정하는 방법
  * 인라인 스타일보다 우선순위가 낮음
* 외부 (external) 스타일: HTML 문서와는 별개의 파일에서 스타일을 지정하는 방법
  * 유지보수에 용이
  * .css 파일을 만들고 link 태그로 연결

### 속성
* color: 텍스트의 색상을 지정 / background-color: 요소의 배경 색상을 지정
  * 색상 이름, HEX 코드, RGB 등으로 지정
  ```css
  color: red; /* 텍스트를 빨간색으로 */
  color: #00ff00; /* 텍스트를 초록색으로 */
  color: rgb(0, 0, 255); /* 텍스트를 파란색으로 */
  ```
  ```css
  background-color: yellow; /* 배경을 노란색으로 */
  background-color: #f0f0f0; /* 배경을 회색으로 */
  background-color: rgba(0, 0, 0, 0.5); /* 투명도 50%의 검은 배경 */
  ```
* font-weight: 텍스트의 굵기를 지정
  * normal (기본), bold (굵게), 또는 100~900 사이의 숫자 값으로 설정
  ```css
  font-weight: normal; /* 기본 굵기 */
  font-weight: bold; /* 굵게 */
  font-weight: 700; /* 굵은 글씨 */
  ```
* font-size: 텍스트의 크기를 지정
  * pt, 픽셀(px), em, rem, 백분율(%) 등으로 설정
  ```css
  font-size: 12pt; /* 12pt 크기의 텍스트 */
  font-size: 16px; /* 16px 크기의 텍스트 */
  font-size: 1.5em; /* 부모 요소 크기의 1.5배 */
  font-size: 120%; /* 부모 요소 크기의 120% */
  ```
* margin: 요소의 외부 여백(바깥쪽 여백)을 설정 / adding: 요소의 내부 여백(안쪽 여백)을 설정
  * 픽셀(px), 퍼센트(%), auto로 설정
  * 네 방향(위, 오른쪽, 아래, 왼쪽)에 대해 개별적으로 지정할 수도 있음
  ```css
  margin: 20px; /* 모든 방향에 20px의 여백 */
  margin: 10px 20px; /* 상/하 10px, 좌/우 20px */
  margin: 10px 20px 30px 40px; /* 상 10px, 우 20px, 하 30px, 좌 40px */
  ```
  ```css
  padding: 20px; /* 모든 방향에 20px의 여백 */
  padding: 10px 20px; /* 상/하 10px, 좌/우 20px */
  padding: 10px 20px 30px 40px; /* 상 10px, 우 20px, 하 30px, 좌 40px */
  ```