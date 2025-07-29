import { Link, useNavigate, useRouteError } from "react-router-dom";
import { ButtonBox } from "../shared/inputs";

const ErrorPage = () => {
    const {status, statusText, data} = useRouteError();

    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen bg-slate-200 p-5 flex flex-col gap-y-4">
            <p className="text-4xl font-bold">에러 페이지입니다.</p>
            {status && <p>{status}</p>}
            {statusText && <p>{statusText}</p>}
            {data && <p>{data}</p>}

            <div className="d-flex gap">

                <ButtonBox className="btn btn-primary" label="뒤로가기" onClick={() => navigate(-1)} />
                <Link to="/">
                    <ButtonBox className="btn btn-secondary" label="메인 이동"/>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage;