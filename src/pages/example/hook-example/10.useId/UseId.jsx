import { useId } from "react";

const UseId = () => {
    return (
        <div>
            <MyInput />
        </div>
    )
}

const MyInput = () => {
    const id = useId();
    console.log(id)

    return (
        <div>
            <label htmlFor={id}>이름</label>
            <input id={id} />
        </div>
    )
}

export default UseId;