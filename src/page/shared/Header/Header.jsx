import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import logo from '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders/AuthProviders';
import spinner from '../../../assets/loading.gif'
// import spinner  from '../../../assets/spinner.gif'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, loading, logOut } = useContext(AuthContext);

    console.log(user?.photoURL);
    if (loading) {
        return <div className='flex justify-center  mt-60'><img src={spinner} alt="" /></div>
    }

    // logout function 
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // console.log(user.photoURL);
    return (
        <nav className='relative container  mx-auto flex justify-between  my-7'>

            <Link to='/'>
                <img src={logo} alt="Restaurt" className='h-6' />
            </Link>

            <div>
                {/* Nav Items Section for lerge device start*/}
                <ul className='text-xl font-medium  items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/register'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Register
                        </NavLink>
                    </li>
                    <li>
                        {
                            user ? <div className='flex gap-6'>
                                <NavLink onClick={handleLogOut} className={({ isActive }) => (isActive ? 'active' : 'default')}>Loguot</NavLink>
                                <img src={user?.photoURL} alt=""  className='h-14 rounded-full'/>
                            </div> : <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Login
                            </NavLink>
                        }
                    </li>
                </ul>
                {/* Nav Items Section for lerge device End*/}

                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <img src={logo} alt="Restaurt" className='h-6' />
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/statistics'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/appliedJobs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/login'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;