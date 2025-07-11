import { CodeViewerContainer } from "../components";
import codeViewer from "./codeViewer";

const Home = () => {
    return (
        <>
            <CodeViewerContainer
                files={{
                    "Home": codeViewer.home,
                    "Header": codeViewer.header,
                    "Layout": codeViewer.layout,
                    "Footer": codeViewer.footer,
                }}
            />
            {/* <div>Home 입니다.</div> */}
        </>
    )
}

export default Home;