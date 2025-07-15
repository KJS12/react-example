import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef((props, ref) => {
    const {children} = props;
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => { setIsOpen(true) },
        close: () => { setIsOpen(false) },
        toggle: () => { setIsOpen((prev) => !prev) }
    }));

    if(!isOpen) return  null;

    return (
        <div style={{
            position: 'fixed',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
            background: 'white',
            padding: '1.5rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            zIndex: 9999,
        }}>
            {children}
        </div>
    );
});

export default Modal;