import '../utilities.css';
import './logout.css'
import axios from 'axios';

const Logout = () => {

    const handleLogout = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/logout', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                },      
            }) 
          console.log('User logged out successfully!');
		  localStorage.removeItem('token');
          window.location.reload();
        } catch (error) {
          console.error('Error logging out', error);
        }
    };
    

    return <div className='flex flex-col justify-center align-center'>Logout Here!
        <button className='logout_button width-40' onClick={handleLogout}> Logout</button>
    </div>;
};

export default Logout;