import './LogIn.css'
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import google from '../../../images/google.jpeg';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            <img
                className="google-login"
                src={google}
                alt="google"
            />
            <button onClick={handleGoogleLogin} className="btn google-btn">Google Sign In</button>
        </div>
    );
};

export default LogIn;