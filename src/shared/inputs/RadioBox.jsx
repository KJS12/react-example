import React, { forwardRef, useId } from "react";
import PropTypes from 'prop-types';

/**
 * 필요한 props 데이터만 명시적으로 뽑아서 사용하고
 * 그 이외의 데이터는 {...props}를 그대로 넘겨 사용한다.
 * @param {*} param0
 * @param {*} ref
 * @returns
 */
const RadioBox = ({label, id, className, checked, ...props}, ref) => {
    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-agree`;
    return (
        <>
            <div className="inline-flex items-center space-x-2">
                <label
                    htmlFor={uniqueId}
                    className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-colors
                        ${checked ? 'btn btn-primary' : 'btn btn-outline'}
                        ${className ?? ""}
                        `
                    }
                >
                    <input
                        type="radio"
                        id={uniqueId}
                        checked={checked}
                        className="sr-only"
                        ref={ref}
                        {...props}
                    />
                    {label}
                </label>
            </div>
        </>
    )
}

RadioBox.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
};

// props와 ref를 함께 사용할 경우 forwardRef를 감싼다.
export default forwardRef(RadioBox);