// 타입스크립트 진짜 쉽게 설명해줌 | 이거보고도 이해 안되면 집가라
// 유튜브 참고 URL - https://youtu.be/GHHUjITelsA?si=m_Ej9T0GISPAkDTB

// 코딩에 진심인 사람을 위해 준비한 리액트 타입스크립트 | 실제 회사에서 쓰는 레벨 ver
// 유튜브 참고 URL - 
// https://youtu.be/V9XLst8UEtk?si=StbD9hnWGIBgCPY4

// TypeScript 적용한 React 프로젝트 만들 때, 터미널에서 사용하는 명령어 "npx create-react-app my-app --template typescript"
// 참고 URL - https://create-react-app.dev/docs/getting-started

// TODO : Forma 테스트 기능 구현 (2024.06.26 jbh)
// 참고 URL - https://aps.autodesk.com/en/docs/forma/v1/embedded-views/tutorial/

// Forma용 테스트 React 프로젝트 생성 방법
// 1. 루트 폴더 "FormaStudy" 생성 
// 2. VSCode로 루트 폴더 "FormaStudy" 열기 
// 3. VSCode 상단 탭 "터미널(T)" 클릭 -> "새 터미널" 클릭 
// 4. 하단에 터미널 화면 출력 -> 터미널 타입 변경 (기존) cmd -> (변경) Git Bash
// 5. 폴더 경로 "/d/bhjeon/FormaStudy" 확인 -> 터미널 명령어 "npm init preact" 입력 및 엔터 
// 6. 터미널 화면에서 출력되는 항목 "Project directory:" 하단 디렉토리 이름 새로 작성 "my-forma-extension" -> 엔터키 누르기 -> 
//    항목 "Project language:" 하단 언어 TypeScript 체크 -> 엔터키 누르기 -> 항목 "Use router?" 하단 Yes 체크 -> 엔터키 누르기 ->
//    항목 "Prerender app (SSG)?" 하단 Yes 체크 -> 엔터키 누르기 -> 
//    항목 "Use ESLint" 하단 Yes 체크 -> 엔터키 누르기
//    메세지 "Set up project directory Installed project dependencies" 출력 -> forma 디렉토리 "my-forma-extension" 생성 완료 
// 7. 터미널에 명령어 "cd my-forma-extension" 입력 -> 엔터키 누르기 -> 명령어 "npm run dev" 입력 -> 엔터키 누르기 
// 8. Forma용 테스트 React 프로젝트 생성 완료 

import {render} from 'preact';
import './style.css';
import {Forma} from "forma-embedded-view-sdk/auto";

export function App() {
    return (
        <>Welcome to {Forma.getProjectId()}</>
    )
}

render(<App/>, document.getElementById('app'));



// import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

// import { Header } from './components/Header.jsx';
// import { Home } from './pages/Home/index.jsx';
// import { NotFound } from './pages/_404.jsx';
// import './style.css';

// export function App() {
// 	return (
// 		<LocationProvider>
// 			<Header />
// 			<main>
// 				<Router>
// 					<Route path="/" component={Home} />
// 					<Route default component={NotFound} />
// 				</Router>
// 			</main>
// 		</LocationProvider>
// 	);
// }

// if (typeof window !== 'undefined') {
// 	hydrate(<App />, document.getElementById('app'));
// }

// export async function prerender(data) {
// 	return await ssr(<App {...data} />);
// }
