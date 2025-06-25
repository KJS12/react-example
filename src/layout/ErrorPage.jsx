import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {status, statusText, data} = useRouteError();

    return (
        <div>
            <h1>에러 페이지입니다.</h1>
            {status && <p>{status}</p>}
            {statusText && <p>{statusText}</p>}
            {data && <p>{data}</p>}

            <Link to="/">
                <button type="button">메인 이동</button>
            </Link>
        </div>
    )
}

export default ErrorPage;