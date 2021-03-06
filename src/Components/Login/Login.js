import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { Helmet } from 'react-helmet';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = (e) => {
        e.preventDefault();
        //  Some Firebase fancy login shit
            auth
                .signInWithEmailAndPassword(email, password)
                .then(auth=>{
                    history.push('/')
                })
                .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        // do some firebase register shit
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it Successfully created a new user with email and password
                console.log(auth)
                if( auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Helmet>
                <title>
                    Amazon Login 
                </title>
            </Helmet>
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, Our Cookies Notice and our interest-Based Ads
                </p>
                <button
                    onClick={register}
                    className="login__registerButton">
                    Create Account
                    </button>
            </div>
        </div>
    )
}

export default Login;
