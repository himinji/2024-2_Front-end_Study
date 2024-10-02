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
* color: 텍스트의 색상을 지정
  * 색상 이름, HEX 코드, RGB 등으로 지정
```css
color: red; /* 텍스트를 빨간색으로 */
color: #00ff00; /* 텍스트를 초록색으로 */
color: rgb(0, 0, 255); /* 텍스트를 파란색으로 */
```