import { useReducer } from "react";
import './blog.css';

const initData = [
    {title: "남자코드 추천", date: "2월 17일 발행", count: 0},
    {title: "강남 우동맛집", date: "2월 17일 발행", count: 0},
    {title: "파이썬독학", date: "2월 17일 발행", count: 0},
];

const reducer = (state, action) => {
    switch(action.type) {
        case 'SORT_ASC':
            return [...state].sort((a, b) => a.title.localeCompare(b.title));
        case 'SORT_DESC':
            return [...state].sort((a, b) => b.title.localeCompare(a.title));
        case 'ADD_ITEM':
            return [action.payload, ...state];
        case 'EDIT_ITEM':
            return state.map((item) =>
                item.title === action.payload.oldTitle
            ? {...item, title: action.payload.newTitle}
            : item
        );
        case 'INCREMENT_COUNT':
            return state.map((item, index) =>
                index === action.payload.index
                ? {...item, count: item.count + 1}
                : item
            )
        default:
            return state;
    }
}

const Modal = ({
    title = "제목",
    date = "날짜",
    info = "상세내용",
}) => {
    return (
        <div className="modal">
            <h4>{title}</h4>
            <p>{date}</p>
            <p>{info}</p>
        </div>
    )
}

const Blog = () => {
    const [contents, dispatch] = useReducer(reducer, initData)

    const handleSortAsc = () => {
        dispatch({type: 'SORT_ASC'});
    }

    const handleSortDesc = () => {
        dispatch({type: 'SORT_DESC'});
    }

    const handleEdit = () => {
        dispatch({
            type: 'EDIT_ITEM',
            payload: {
                oldTitle: contents[0].title,
                newTitle: "독학 리액트"
            }
        })
    }

    const handleAdd = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {title: "코드 추22천", date: "2월 17일 발행", count: 0}
        });
    }

    const handleClick  = (index) => {
        dispatch({type: 'INCREMENT_COUNT', payload: {index}})
    }

    return (
        <div>
            <div className="gap">
                <button onClick={handleSortAsc}>오름차순 정렬</button>
                <button onClick={handleSortDesc}>내림치순 정렬</button>
                <button onClick={handleEdit}>글수정</button>
                <button onClick={handleAdd}>글추가</button>
            </div>
            {contents && contents.map((item, index) => (
                <div className="list" key={index}>
                    <h4>{item.title} <span onClick={() => handleClick(index)}>👍</span> {item.count}</h4>
                    <p>{item.date}</p>
                    <Modal
                        title={item.title}
                        date={item.date}
                    />
                </div>
            ))}

            {/* 구조분해 할당 버전 */}
            {/* {contents && contents.map((item, index) => {
                const {title, date, count} = item;

                return (
                    <div className="list" key={index}>
                        <h4>{title} <span onClick={() => handleClick(index)}>👍</span> {count}</h4>
                        <p>{date}</p>
                        <Modal
                            title={title}
                            date={date}
                        />
                    </div>
                )
            })} */}
        </div>
    )
}

export default Blog;