import React from "react";

const Child = ({ children }) => {
    const array = React.Children.toArray(children);

    const header = array.find(child => child.type === Child.Header);
    const body = array.find(child => child.type === Child.Body);
    const footer = array.find(child => child.type === Child.Footer);

    return (
        <div className="box">
            <div className="header">{ header }</div>
            <div className="body">{ body }</div>
            <div className="footer">{ footer }</div>
        </div>
    )
}

Child.Header = ({ children }) => <div className="header">{children}</div>;
Child.Body = ({ children }) => <div className="body">{children}</div>;
Child.Footer = ({ children }) => <div className="footer">{children}</div>;

export default Child;
