import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faCreditCard, faBook, faCog } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
const AdminSidebar = () => {
    const navigate = useNavigate()
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: faColumns // FontAwesome Dashboard icon
        },
        {
            title: 'Analytics',
            path: '/admin/analytics',
            icon: faCreditCard // FontAwesome Credit Card icon
        },
        {
            title: 'UserData',
            path: '/admin/userdata',
            icon: faCog // FontAwesome Cog icon
        },
    ]
    return (
        <>
            <div className='w-[15vw] bg-red-50/20 shadow-md shadow-black flex flex-col'>
                
                <div className='h-[90vh] flex flex-col gap-1'>
                    {
                        UserLinks.map((link, index) => (
                            <NavLink key={index} to={link.path} className='p-5 border-b-4 border-black hover:border-red-600 font-bold mt-2'>
                                <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                    <FontAwesomeIcon icon={link.icon} size="lg" /> {/* Use FontAwesome icon component */}
                                    {link.title}
                                </span>
                            </NavLink>
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default AdminSidebar;
