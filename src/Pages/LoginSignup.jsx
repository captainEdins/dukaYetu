import React from 'react';

export default function  LoginSignup (){
    return(
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Sign Up</h1>
                <div className="login-signup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email Address"/>
                    <input type="password" placeholder="Your Password"/>
                </div>
                <button>Continue</button>
                <p className="login-signup-login">
                    Already have an account? <span>Login here</span>
                </p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}