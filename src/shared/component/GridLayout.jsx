import PropTypes from 'prop-types';

const GridLayout = ({
    children,
    cols = 2,           // 열 개수 (ex. 2열)
    className = "",
}) => {
    return (
        <div className={`grid grid-cols-${cols} gap-2 md:flex md:gap-2 ${className}`}>
            { children }
        </div>
    )
}

GridLayout.propTypes = {
    cols: PropTypes.number,
    className: PropTypes.string
}

export default GridLayout;