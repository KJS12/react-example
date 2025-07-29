import PropTypes from 'prop-types';

const getColsClass = (prefix, cols) => {
    const validCols = [1,2,3,4,5,6,7,8,9,10,11,12];
    return validCols.includes(cols) ? `${prefix}grid-cols-${cols}` : '';
}

const GridLayout = ({
    children,
    cols = 2,           // (모바일 기준) 열 개수 (ex. 2열)
    smCols = 4,         // sm(640px 이상) 열 개수 (ex. 4열)
    gap = 2,            // 간격
    className = "",
}) => {
    const baseColsClass = getColsClass('', cols);
    const smColsClass = getColsClass('sm:', smCols);
    const gapClass = `gap-${gap}`;

    return (
        <div className={`
            ${baseColsClass}
            ${smColsClass}
            ${gapClass}
            ${className}`}
        >
            { children }
        </div>
    )
}

GridLayout.propTypes = {
    cols: PropTypes.number,
    smCols: PropTypes.number,
    gap: PropTypes.number,
    className: PropTypes.string
}

export default GridLayout;