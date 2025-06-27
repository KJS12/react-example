import { useReducer, useState } from "react";
import StudentList from "./StudentList";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add-student':
            const name = action.payload;
            const newStudent = { id: Date.now(), name, isHere: false, }
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        case 'delete-student':
            return {
                count: state.count -1,
                students: state.students.filter(student => student.id !== action.payload.id)
            }
        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if(student.id === action.payload.id) {
                        return {...student, isHere: !student.isHere};
                    }
                    return student;
                })
            }
        default:
            return state;
    }
}

const initialState = {
    count: 0,
    students: [],
}

const Student = () => {
    const [name, setName] = useState('');
    const [studentInfo, dispatch] = useReducer(reducer, initialState);


    const handleAdd = () => {
        dispatch({type: 'add-student', payload: name});
    }

    return (
        <div>
            <h2>출석부</h2>
            <p>총 학생 수: {studentInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAdd}>추가</button>
            {studentInfo.students.map((student, index) => {
                return (
                    <StudentList
                        key={index}
                        name={student.name}
                        dispatch={dispatch}
                        id={student.id}
                        isHere={student.isHere}
                    />
                )
            })}
        </div>
    )
}

export default Student;