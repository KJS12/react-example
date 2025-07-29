import { useInput } from "./useInput";
import { useFetch } from "./useFetch";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";
import { ButtonBox } from "../../../shared/inputs";
import { Highlight, Section } from "../../../shared/component";

const displayMessage = (message) => {
    alert(message);
}

const baseUrl = "https://jsonplaceholder.typicode.com";

const CustomHook = () => {
    const [inputValue, handleChange, handleSubmit] = useInput('', displayMessage);
    const {data, fetchUrl} = useFetch(baseUrl, 'users');
    const {data: userData} = useFetch(baseUrl, 'users');
    const {data: postData} = useFetch(baseUrl, 'posts');

    return (
        <div>
            <CodeViewerContainer
                title={"Custom Hook"}
                files={{
                    "설명": codeViewer.description,
                    "useFetch": codeViewer.useFetch,
                    "useInput": codeViewer.useInput,
                    "example": codeViewer.example,
                }}
            />

            <Section.Dashed>
                <div>
                    <Highlight title="useInput" />
                    <div className="flex gap-3">
                        <input value={inputValue} onChange={handleChange} />
                        <ButtonBox label="확인" onClick={handleSubmit} />
                    </div>
                </div>
            </Section.Dashed>
            <Section.Dashed>
                <Highlight title="useFetch" />
                <div className="flex gap-2">
                    <ButtonBox label="Users" onClick={() => fetchUrl('users')} />
                    <ButtonBox label="Posts" onClick={() => fetchUrl('posts')} />
                    <ButtonBox label="Todos" onClick={() => fetchUrl('todos')} />
                </div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Section.Dashed>
            <Section.Dashed>
                <Highlight title="Users" />
                {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
            </Section.Dashed>
            <Section.Dashed>
                <Highlight title="Posts" />
                {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
            </Section.Dashed>
        </div>
    )
}

export default CustomHook;