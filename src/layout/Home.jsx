import { CodeViewer, CodeViewerContainer } from "../components";
import codeViewer from "./codeViewer";

const Home = () => {
    return (
        <>
            <div>Home 입니다.</div>
            <CodeViewerContainer>
                <CodeViewer code={codeViewer.home} />
                <CodeViewer code={codeViewer.header} />
                <CodeViewer code={codeViewer.layout} />
                <CodeViewer code={codeViewer.footer} />
            </CodeViewerContainer>
        </>
    )
}

export default Home;