## [React](https://create-react-app-one-rho-88.vercel.app/)
## SPA(Single Page Application)
* 하나의 HTML 페이지에서 모든 애플리케이션 기능을 제공하는 웹 애플리케이션 아키텍처
* SPA에서는 페이지를 새로고침하거나 다시 로드하지 않고도 사용자와의 상호작용을 처리

## npm(npx)으로 React를 시작해보기
1. **Node.js** 설치
2. **React 프로젝트 생성** - 터미널에서 `npx create-react-app (프로젝트명)` 명령어 사용
3. **프로젝트 디렉토리로 이동** - `cd my-app`
4. **개발 서버 실행** - `npm start`
5. **파일 수정 및 자동 반영** - `App.js` 파일을 수정하고 저장하면 개발 서버가 자동으로 변경 사항을 반영하여 브라우저에 실시간으로 업데이트

## 컴포넌트로 파일 분리하기
1. `src/폴더명` 폴더 만들기
2. `컴포넌트.js` 파일 만들기 (이때 컴포넌트는 함수명, 파일명은 대문자로 시작)
3. `컴포넌트.js`의 소스코드 - `export dafault`로 다른 파일에서도 import할 수 있도록 함
4. `App.js`에 `import 컴포넌트`과 `fuction App()` 안에 `<컴포넌트 />` 추가
* *컴포넌트로 파일을 분리해서 작업하면 여러명이서 동시 작업 가능*