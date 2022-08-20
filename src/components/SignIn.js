import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/SignIn.css';
import '../css/styles.css';

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
        }

    }

    return(
        <div className="body">
            <br/>
            <br/>
            <div>
                <h1>Student Login</h1>
            </div>
            {error !== '' && (
                <div className="center">
                    <div className="errorMsg">
                        <p class="error">{error}</p>
                    </div>
                </div>
            )}
            <form className ="login" onSubmit={onSubmit}>
                <label className='label'>Email</label>
                <br/>
                <input className='auth-form' type="email" name="email" placeholder="john@example.com" value={email} onChange={onChangeEmail} />
                <br/>
                <label className='label'>Password</label>
                <br/>
                <input className='auth-form'type="password" name="password" placeholder="password" value={password} onChange={onChangePassword} />
                <button className="auth-form"type="submit">Submit</button>
            </form>
         </div>
    );
}

export default SignIn;
