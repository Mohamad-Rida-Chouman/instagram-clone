import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <img className="width-20" src="https://www.svgrepo.com/show/471520/home-05.svg" alt="home" />,
        to: '/',
        section: ''
    },
    {
        display: 'Search',
        icon: <img className="width-20" src="https://www.svgrepo.com/show/532555/search.svg" alt="search" />,
        to: '/search',
        section: 'search'
    },
    {
        display: 'Create',
        icon: <img className="width-20" src="https://www.svgrepo.com/show/521940/add-square.svg" alt="create" />,
        to: '/post',
        section: 'post'
    },
    {
        display: 'Logout',
        icon: <img className="width-20" src="https://www.svgrepo.com/show/509151/logout.svg" alt="log out" />,
        to: '/logout',
        section: 'logout'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar-menu-item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar-logo">
            <img className='width-40' src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg" alt="Instagram Logo" />
        </div>
        <div ref={sidebarRef} className="sidebar-menu">
            <div
                ref={indicatorRef}
                className="sidebar-menu-indicator"
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar-menu-item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar-menu-item-icon">
                                {item.icon}
                            </div>
                            <div className="sidebar-menu-item-text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;