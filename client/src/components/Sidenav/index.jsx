import React from "react";
import './sidenav.css'
import '../../utilities.css'

const Sidenav = () => {
    return (
         <div className="main-container-sidenav flex flex-col">
            <div className="logo-container-sidenav flex">
                <img className='width-100' src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg" alt="Instagram Logo" />
            </div>
            <div className="icons-container-sidenav flex flex-col justify-center align-center">
                <div className="icon home-icon flex gap-s justify-center">
                    <img className="width-100" src="https://www.svgrepo.com/show/471520/home-05.svg" alt="home" />
                    <p>Home</p>
                </div>
                <div className="icon search-icon flex gap-s justify-center">
                    <img className="width-100" src="https://www.svgrepo.com/show/532555/search.svg" alt="search" />
                    <p>Search</p>
                </div>
                <div className="icon create-icon flex gap-s justify-center">
                    <img className="width-100" src="https://www.svgrepo.com/show/521940/add-square.svg" alt="create" />
                    <p>Create</p>
                </div>
                <div className="icon create-icon flex gap-s justify-center">
                    <img className="width-100" src="https://www.svgrepo.com/show/509151/logout.svg" alt="log out" />
                    <p>Logout</p>
                </div>
            </div>
         </div>
    );
}
 
export default Sidenav;