// 인풋 초기 데이터
export const inputValue = {
    title: null,
    content: null,
    agree1: null,
    agree2: null,
    agree3: null,
    chk1: null,
}

// 상환종류
export const REPAYMENT_TYPE = {
    '1': '원리균등상환',
    '2': '원리금균등',
    '3': '만기일시',
};

// 상환 리스트
export const repaymentList = (name) => {
    return Object.entries(REPAYMENT_TYPE).map(([value, label]) => ({
        label, name, value
    }));
}