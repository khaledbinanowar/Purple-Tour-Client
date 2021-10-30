import './LogIn.css'
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

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
            <button onClick={handleGoogleLogin} className="btn btn-secondary">Google Sign In</button>
        </div>
    );
};

export default LogIn;