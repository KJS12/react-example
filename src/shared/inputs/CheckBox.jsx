import { forwardRef, useId } from "react";
import PropTypes from 'prop-types';

/**
 * 필요한 props 데이터만 명시적으로 뽑아서 사용하고
 * 그 이외의 데이터는 {...props}를 그대로 넘겨 사용한다.
 * @param {*} param0
 * @param {*} ref
 * @returns
 */
const CheckBox = ({label, id, ...props}, ref) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-chk`;
    return (
        <div className="mb-2">
            <input
                type="checkbox"
                id={uniqueId}
                {...(ref ? {ref} : {})}
                {...props}
            />
            {label && <label className="font-bold ml-2" htmlFor={uniqueId}>{label}</label>}
        </div>
    );
}

CheckBox.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
}

// props와 ref를 함께 사용할 경우 forwardRef를 감싼다.
export default forwardRef(CheckBox);