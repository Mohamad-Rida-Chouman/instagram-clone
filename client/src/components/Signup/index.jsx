import React , { useState } from 'react';
import './signup.css';
import '../../utilities.css';
import Login from '../Login';
import axios from 'axios';

const Signup = () => {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
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
    
    const handleAddUser = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
          console.log('User added successfully!');
          localStorage.setItem('token', response.data.authorisation.token);
          setFormData({
            name: "",
            username: "",
            email: "",
            password: "",
          });
          window.location.reload();
        } catch (error) {
          console.error('Error adding user:', error);
        }
    };

    const [redirectToSignup, setRedirectToSignup] = useState(false);

    const handleClick = () => {
        setRedirectToSignup(true);
    };

    if (redirectToSignup) {
        return <Login />;
    }
    return (
        <div className="main-container-login flex flex-col justify-center align-center gap-l">
            <div className="login-form-container flex flex-col align-center gap-l">
                <div className="login-form-title flex">
                    <img className='width-100' src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg" alt="Instagram Logo" />
                </div>
                <div className="login-form-content flex flex-col wrap align-center gap-m">
                    <div className="input-name flex flex-col justify-between gap-s">
                        <input className='input-box-signup' type="text" name='name' placeholder='Full name' value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="input-username flex flex-col justify-between gap-s">
                        <input className='input-box-signup' type="text" name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
                    </div>
                    <div className="input-email flex flex-col justify-between gap-s">
                        <input className='input-box-signup' type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-password flex flex-col justify-between gap-s">
                        <input className='input-box-signup' type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                    </div>
                    <button onClick={handleAddUser} className='signup-button flex width-100 justify-center'>Sign up</button>
                </div>
            </div>
            <div className="login-form-container notice">
				Already have an account? 
                <button className='link-to-login' onClick={handleClick}>Login</button>
			</div>
        </div>);
}
export default Signup;