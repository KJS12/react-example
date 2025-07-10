import { useInput } from "./useInput";
import { useFetch } from "./useFetch";


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
            <div className="container-line">
                <h1>useInput</h1>
                <input value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>확인</button>
            </div>
            <div className="container-line">
                <h1>useFetch</h1>
                <button onClick={() => fetchUrl('users')}>Users</button>
                <button onClick={() => fetchUrl('posts')}>Posts</button>
                <button onClick={() => fetchUrl('todos')}>Todos</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <div className="container-line">
                <h1>Users</h1>
                {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
                <h1>Posts</h1>
                {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
            </div>
        </div>
    )
}

export default CustomHook;