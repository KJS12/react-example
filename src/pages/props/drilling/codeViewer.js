const codeViewer = {
description:
`React를 사용할 때 자주 발생하는 구조적 문제로,
'상위 컴포넌트의 데이터'를 '하위 컴포넌트'에 전달하려고 할때,
'직접 관련이 없는 중간 컨포넌트들까지 props를 통해 데이터를 전달해야 하는 현상'으로
이로 인해 코드의 '가독성'과 '유지보수성'이 떨어지고, 컴포넌트 구조가 '복잡'해지는 단점이 있다.

※※ 해결방안 ※※
1. Context API (React 내장 기능)
    - React 내장 기능으로, 컴포넌트 트리 전체에서 전역적으로 데이터를 공유할 수 있게 해주는 도구
    - 사용자 정보, 테마, 언어 설정 등 '비교적 간단한 상태 공유에 적합'
    - 컴포넌트 트리 내에서 특정 범위 (부분 전역상태)

2. Redux (상태관리 라이브러리)
    - 별도의 상태관리 라이브러리로, 복잡한 상태 로직과 전역 상태 관리, 비동기 작업처리에 적합
    - 로그인 상태, 복잡합 폼 등 '규모가 크기 상태가 복잡한 곳에 적합'
    - 애플리케이션 전체에서 공유 (전체 전역 상태)
`,

propsDrilling:
`import { useState } from "react";
import Page from "./Page";

const PropsDrilling = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <Page isDark={isDark} setIsDark={setIsDark} />
    )
}

export default PropsDrilling;
`,

childPage:
`import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({isDark, setIsDark}) => {
    return (
        <div className="page">
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    )
}

export default Page;
`,

childHeader:
`const Header = ({isDark}) => {
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome 테스트!</h1>
        </header>
    )
}

export default Header;
`,

childContent:
`const Content = ({isDark}) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>테스트님, 좋은 하루 되세요</p>
        </div>
    )
}

export default Content;
`,

childFooter:
`const Footer = ({isDark, setIsDark}) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button onClick={toggleTheme}>Dark Mode</button>
        </div>
    )
}

export default Footer;
`,
}

export default codeViewer;
