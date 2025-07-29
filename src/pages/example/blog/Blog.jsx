import { useReducer } from "react";
import './blog.css';
import { ButtonBox } from "../../../shared/inputs";

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
            <div className="flex flex-row gap-2 mb-2">
                <ButtonBox label="오름차순 정렬" className="btn btn-primary" onClick={handleSortAsc} />
                <ButtonBox label="내림차순 정렬" className="btn btn-primary" onClick={handleSortDesc} />
                <ButtonBox label="글 수정" className="btn btn-danger" onClick={handleEdit} />
                <ButtonBox label="글 추가" className="btn btn-secondary" onClick={handleAdd} />
            </div>
            {contents && contents.map((item, index) => {
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
            })}
        </div>
    )
}

export default Blog;