import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SignIn({onLogIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var [error, setError] = useState('');
    const navigate = useNavigate();
    
 
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }
 
    function onSubmit(e) {
        setError('');
        e.preventDefault();

        if(email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            navigate('/');
            onLogIn(email);
        } else {
            setError('Sign in failed. Please try again.')

        }

    }

    return(
        <>
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={email} onChange={onChangeEmail} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={onChangePassword} />
                    </div>
                    {error !== '' &&<div>{error}</div>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
    );


}

export default SignIn;