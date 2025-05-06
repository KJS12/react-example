import { useNavigate } from "react-router-dom";

/**
 * 페이지 이동
 * @returns
 */
export const usePage = () => {
    const navigate = useNavigate();

    /**
     * 홈으로 이동
     */
    const goHome = () => {
        navigate("/");
    }

    /**
     * 특정 화면으로 이동
     * @param {*} page
     * @param {object} data={}
     */
    const goPage = (page = "/", data={}) => {
        navigate(page, {state : data});
    }

    return {
        goHome,
        goPage,
    }
}




