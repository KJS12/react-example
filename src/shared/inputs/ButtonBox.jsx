import PropTypes from 'prop-types';

const ButtonBox = ({
    type="button",
    className="btn btn-primary",
    label,
    ...props
}) => {
    return (
        <button type={type} className={className} {...props} >
            {label}
        </button>
    );
}


ButtonBox.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
}

export default ButtonBox;