import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SignIn({onSignIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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
        console.log(email, password);

        if(email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            onSignIn(email);
            navigate('/');

        } else {
            setError('Sign in failed. Please try again.');
            console.log(error);

        }

    }

    return(
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="john@example.com" value={email} onChange={onChangeEmail} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="password" value={password} onChange={onChangePassword} />
                    </div>
                    {error !== '' && (
                        <div>
                          <span>{error}</span>
                        </div>
                      )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
