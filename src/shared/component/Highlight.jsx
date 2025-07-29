const Highlight = ({
    size='3xl',
    bold = false,
    className="",
    title,
}) => {
    const textSize = `text-${size}`;
    const textBold = bold ? 'font-bold' : '';

    return (
        <div className={`${textSize} ${textBold} ${className}`}>{title}</div>
    )
}

export default Highlight;