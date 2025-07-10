const codeViewer = {
propsDrilling:
`Props Drilling 예시
import { useState } from "react";
import Page from "./Page";

const PropsDrilling = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <Page
            isDark={isDark}
            setIsDark={setIsDark}
        />
    )
}

export default PropsDrilling;
`,

childrenPage:
`Props Drilling → children
import Content from "./Content";
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

childrenHeader:
`Props Drilling → children header
const Header = ({isDark}) => {
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

childrenContent:
`Props Drilling → children content
const Content = ({isDark}) => {
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

childrenFooter:
`Props Drilling → children footer
const Footer = ({isDark, setIsDark}) => {
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
