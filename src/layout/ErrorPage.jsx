import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {status, statusText, data} = useRouteError();

    const navigate = useNavigate();

    return (
        <div>
            <h1>에러 페이지입니다.</h1>
            {status && <p>{status}</p>}
            {statusText && <p>{statusText}</p>}
            {data && <p>{data}</p>}

            <div className="d-flex gap">
                <button type="button" onClick={() => navigate(-1)}>뒤로가기</button>
                <Link to="/">
                    <button type="button">메인 이동</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage;