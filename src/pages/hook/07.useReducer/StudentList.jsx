import { ButtonBox } from "../../../shared/inputs";

const StudentList = ({name, dispatch, id, isHere}) => {
    const handleAction = (type) => {
        dispatch({
            type: type,
            payload: { id },
        });
    }

    return (
        <div className="flex flex-row items-center gap-7 my-2">
            <span
                className={`font-bold  truncate block w-40 ${isHere ? 'line-through text-gray-400' : 'no-underline text-black'}`}
                onClick={() => handleAction('mark-student')}
            >{name}</span>
            <ButtonBox
                label="삭제"
                className="btn btn-danger"
                onClick={() => handleAction('delete-student')}
            />
        </div>
    )
}

export default StudentList;