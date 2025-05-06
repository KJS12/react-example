export const useFetch = () => {

    /**
     * GET - API 통신
     * @param {*} url
     */
    const GET = async (url) => {
        return await fetchAction(url, "GET", null);
    }
    /**
     * POST - API 통신
     * @param {*} url
     * @param {*} data
     */
    const POST = async (url, data) => {
        return await fetchAction(url, "POST", data);
    }
    /**
     * PUT - API 통신
     * @param {*} url
     * @param {*} data
     */
    const PUT = async (url, data) => {
        return await fetchAction(url, "PUT", data);
    }
    /**
     * DELETE - API 통신
     * @param {*} url
     * @param {*} data
     */
    const DELETE = async (url, data) => {
        return await fetchAction(url, "DELETE", data);
    }

    /**
     *
     * POST - API 통신 (파일 업로드용)
     * @param {*} url
     * @param {*} data
     */
    const POST_FILE = async (url, data) => {
        return await fetchAction(url, "POST", data, true);
    }

    /**
     * 비동기 콜백 함수
     * @param url
     * @param method
     * @param data
     * @param isFileUpload
     * @returns {Promise<void>}
     */
    const fetchAction = async (url, method, data, isFileUpload = false) => {
        let baseUrl = 'http://localhost:8080/api/v1';

        // api 통신 옵션
        const options = {
            method: method,
            headers: {},
            credentials: 'include', // 쿠키를 포함하여 요청 보냄
        };

        // 파일 업로드시 FormData 사용
        if (isFileUpload) {

            if (data instanceof FormData) {
                // 전달받은 데이터가 FormData이면 즉시 body 넣기
                options.body = data;
            } else {
                const formData = new FormData();
                formData.append('file', data);
                options.body = formData;
            }

        } else {
            options.headers = { "Content-Type": "application/json" };

            if (typeof data === 'object') {
                // data 형식이 json인 경우
                options.body = (method === "GET") ? undefined : JSON.stringify(data); // GET은 body 없음
            } else {
                // 그 외
                options.body = data;
            }
        }

        try {
            // API 서버와 통신여부
            const response = await fetch(`${baseUrl}${url}`, options);

            // 요청한 서비스 업무에 대한 데이터 결과값
            const result = await response.json();

            // 오류발생시
            if (!response.ok || !result.success) {
                let message = (result.message === null) ? "data가 존재하지 않거나 배열이 아닙니다." : result.message;
                throw new Error(message);
            }

            // 결과값 반환
            return result.data;

        } catch (error) {
            // 오류 정의
            alert("❌ " + error);
        }
    }

    return {
        GET,
        POST,
        PUT,
        DELETE,
        POST_FILE,
        fetchAction
    }
}