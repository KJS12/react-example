// 인풋 초기 데이터
export const inputValue = {
    title: null,
    content: null,
    check1: null,
    check2: null,
    check3: null,
    agree1: null,
    agree2: null,
    agree3: null,
    agree4: null,
}

export const CHECK_ITEMS = [
    {name: "check1", label: "[필수] 이용약관 동의", required: true},
    {name: "check2", label: "[필수] 개인정보 수집 및 이용 동의", required: true},
    {name: "check3", label: "[선택] 마케팅 정보 수신 동의", required: false},
]

export const AGREE_ITEMS = [
    {
        name: "agree1",
        label: "[필수] 약관 1",
        required: true,
        options: [
            {label: "예", value: "Y"},
            {label: "아니오", value: "N"},
        ]
    },
    {
        name: "agree2",
        label: "[필수] 약관 2",
        required: true,
        options: [
            {label: "예", value: "Y"},
            {label: "아니오", value: "N"},
        ]
    },
    {
        name: "agree3",
        label: "[필수] 약관 3",
        required: true,
        options: [
            {label: "원리균등상환", value: "1"},
            {label: "원리금균등", value: "2"},
            {label: "만기일시", value: "3"},
        ]
    },
    {
        name: "agree4",
        label: "[선택] 약관 4",
        required: false,
        options: [
            {label: "예", value: "Y"},
            {label: "아니오", value: "N"},
        ]
    },
]