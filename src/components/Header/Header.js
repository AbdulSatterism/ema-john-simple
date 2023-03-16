import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user, 'user get from header')

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button className='btn-logout' onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/login">Sign In</Link>
                        </>
                }


                <span>{user && user.email}</span>

            </div>
        </nav>
    );
};

export default Header;