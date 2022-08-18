import { Link } from "react-router-dom";
import '../../auth/login.css';

const LoginNavbar = () => {
    return (
            <nav>
                <ul>
                    <li><button><Link className="link" to='/login'>Login</Link></button></li>
                    <li><button><Link className="link" to='/sign-up'>Sign Up</Link></button></li>
                </ul>
            </nav>
    );
}

export default LoginNavbar;
