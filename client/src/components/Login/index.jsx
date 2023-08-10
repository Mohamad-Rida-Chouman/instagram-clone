import React, { useState } from 'react';
import './login.css';
import '../../utilities.css';
import Signup from '../Signup';

const Login = () => {
	const [redirectToSignup, setRedirectToSignup] = useState(false);

	const handleClick = () => {
		setRedirectToSignup(true);
	};

	if (redirectToSignup) {
		return <Signup />;
	}

	return (
		<div className="main-container-login flex flex-col justify-center align-center gap-l">
			<div className="login-form-container flex flex-col align-center gap-l">
				<div className="login-form-title flex">
					<img
						className="width-100"
						src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
						alt="Instagram Logo"
					/>
				</div>
				<div className="login-form-content flex flex-col wrap align-center gap-m">
					<div className="input-email flex flex-col justify-between gap-s">
						<input className=' input-box-login' type="email" name="email" placeholder="Email" />
					</div>
					<div className="input-password flex flex-col justify-between gap-s">
						<input className=' input-box-login' type="password" name="password" placeholder="Password" />
					</div>
					<button className="login-button flex width-100 justify-center">
						Log in
					</button>
				</div>
			</div>
			<div className="login-form-container notice">
				Don't have an account?
				<button className='link-to-signup' onClick={handleClick}>Signup</button>
			</div>
		</div>
	);
};
export default Login;
