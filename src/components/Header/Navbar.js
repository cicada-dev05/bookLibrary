import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap'
import { FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
     const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
     const [toggleMenu, setToggleMenu] = useState(false);
     const handleNavbar = () => setToggleMenu(!toggleMenu);

     return (
          <nav className='navbar' id="navbar">
               <div className='container navbar-content flex'>
                    <div className='brand-and-toggler flex flex-sb'>
                         <Link to="/" className='navbar-brand flex'>
                              <img src={logoImg} alt="site logo" />
                              <span className='text-uppercase fw- fs-16 ls-1 max-w-0'>Library Management</span>
                         </Link>
                         <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
                              <HiOutlineMenuAlt3 size={35} style={{
                                   color: `${toggleMenu ? "#fff" : "#010101"}`
                              }} />
                         </button>
                    </div>

                    <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                         <ul className="navbar-nav">
                              <li className='nav-item'>
                                   {isAuthenticated?<Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><FaShoppingBag className='text-purple' size = {32} ></FaShoppingBag></Link>:""}
                              </li>
                              {isAuthenticated ? <li className='nav-item'>
                                   <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Welcome, {user.name}</Link>
                              </li> : " "
                              }
                              <li className='nav-item'>
                                   {!isAuthenticated ? <Button to="cart" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={() => loginWithRedirect()}>Sign in</Button>
                                        :
                                        <Button to="cart" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</Button>}

                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     )
}

export default Navbar