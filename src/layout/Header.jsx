import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h4>
                <Link to="/" className="line-over t-white">
                    React Example
                </Link>
            </h4>
        </div>
    )
}

export default Header;