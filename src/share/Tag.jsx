const Tag = {
    Input: ({
        type='text',
        placeholder='입력해줘',
        ...props
    }) => { return <input type={type} placeholder={placeholder}  {...props}/> },

    Button: ({
        type='button',
        placeholder='입력해줘',
        ...props
    }) => { return <button type={type} placeholder={placeholder}  {...props}/> },
}

export default Tag;