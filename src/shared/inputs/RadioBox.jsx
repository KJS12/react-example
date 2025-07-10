import React, { forwardRef, useId } from "react";
import PropTypes from 'prop-types';

/**
 * 필요한 props 데이터만 명시적으로 뽑아서 사용하고
 * 그 이외의 데이터는 {...props}를 그대로 넘겨 사용한다.
 * @param {*} param0
 * @param {*} ref
 * @returns
 */
// const RadioBox = ({title, list=[], onChange}, ref) => {
//     const generatedId = useId();

//     return (
//         list.length > 0
//         && list.map((item, idx) => {
//             const { checked, id, ...restItemProps } = item;
//             const uniqueId = id ?? `${generatedId}-${idx}`;

//             return (
//                 <React.Fragment key={idx}>
//                     <input
//                         type="radio"
//                         id={`${uniqueId}`}
//                         checked={checked}
//                         onChange={onChange}
//                         {...(ref ? {ref} : {})}
//                         {...restItemProps}
//                         style={{marginLeft: '10px'}}
//                     />
//                     {item.label && <label htmlFor={`${uniqueId}`}>{item.label}</label>}
//                 </React.Fragment>
//             )
//         })
//     )
// }
const RadioBox = ({title, list=[], onChange, checkedValue}, ref) => {
    const generatedId = useId();

    return (
        <>
            {title && <span className="strong mr-5">{title}</span>}
            {
                list.length > 0 && list.map((item, idx) => {
                    const { checked, id, name, value, ...restItemProps } = item;
                    const uniqueId = id ?? `${generatedId}-${idx}`;

                    return (
                        <React.Fragment key={idx}>
                            <input
                                type="radio"
                                id={`${uniqueId}`}
                                name={name}
                                value={value}
                                checked={checked}
                                onChange={onChange}
                                {...(ref ? {ref} : {})}
                                {...restItemProps}
                                style={{marginLeft: '10px'}}
                            />
                            {item.label && <label htmlFor={`${uniqueId}`}>{item.label}</label>}
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

RadioBox.propTypes = {
    list: PropTypes.array.isRequired,
    checkedValue: PropTypes.array,
    onChange: PropTypes.func.isRequired,
}

// props와 ref를 함께 사용할 경우 forwardRef를 감싼다.
export default forwardRef(RadioBox);