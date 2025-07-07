import { useId } from "react";

const boxStyle = {
    marginBottom: '10px',
}

const Tag = {
    // 인풋박스
    InputBox: ({label, id, ...props}, ref) => {
        return (
            <div style={boxStyle}>
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    type="text"
                    id={id}
                    ref={ref}
                    {...props}
                    style={{marginLeft: '10px'}}
                />
            </div>
        );
    },

    // 체크박스
    CheckBox: ({label, id, ...props}, ref) => {
        return (
            <div style={boxStyle}>
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    type="checkbox"
                    id={id}
                    ref={ref}
                    {...props}
                    style={{marginLeft: '10px'}}
                />
            </div>
        );
    },

    // 라디오박스
    RadioBox: ({label, ...props}) => {
        const generatedId = useId();

        return (
            <>
                <input
                    type="radio"
                    id={`${generatedId}`}
                    {...props}
                    style={{marginLeft: '10px'}}
                />
                {label && <label htmlFor={`${generatedId}`}>{label}</label>}
            </>
        );
    },

    // 버튼
    Button: ({...props}) => {
        return (
            <button {...props} />
        );
    },
}

export default Tag;