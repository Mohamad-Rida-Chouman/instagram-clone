import React, { useState } from 'react';
import './login.css';
import '../../utilities.css';
import Signup from '../Signup';
import axios from 'axios';

const Login = () => {

	const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
    
    const handleLoginUser = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
          console.log('User logged in successfully!');
		  console.log(response.data.authorisation.token)
		  localStorage.setItem('token', response.token);
          setFormData({
            email: "",
            password: "",
          });
		  window.location.reload();
        } catch (error) {
          console.error('Error logging in:', error);
        }
    };

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
						<input className=' input-box-login' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
					</div>
					<div className="input-password flex flex-col justify-between gap-s">
						<input className=' input-box-login' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
					</div>
					<button onClick={handleLoginUser} className="login-button flex width-100 justify-center">
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
