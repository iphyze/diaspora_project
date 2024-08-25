import React, { useEffect, useState, useRef } from 'react';
import 'animate.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/diaspora_logo_2.png';
import LogoDark from '../assets/images/diaspora_logo_dark.png';
import { useTheme } from '../../contexts/ThemeContext';

const NavBar = () => {
    const { theme, handleToggleTheme } = useTheme();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navBarRef = useRef(null);
    const image = theme === 'dark' ? LogoDark : Logo;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navBarRef.current && !navBarRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

            document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsNavOpen(true);
    };

    const handleClickClose = () => {
        setIsNavOpen(false);
    };
    

    return (
        <React.Fragment>
            <div className='nav-bar-mobile'>
                <NavLink to="/" className='nav-bw-logobox'>
                    <img src={image} alt={'logo'} className='logo-image' />
                </NavLink>
                <div className={theme === 'dark' ? 'fas fa-moon theme-mode-toggle' : 'fas fa-sun theme-mode-toggle'} onClick={handleToggleTheme}></div>
                <div className='fas fa-bars barIcon' onClick={handleClick}></div>
            </div>

            <div 
                ref={navBarRef} 
                className={`nav-bar-wrapper ${isNavOpen && 'active-bar-wrapper'}`}
            >
                <NavLink to="/" className='nav-bw-logobox hide-mobile-view'>
                    <img src={image} alt={'logo'} className='logo-image' />
                </NavLink>
                <div className='nav-bw-menu-wrapper'>
                    <div className={`fas fa-times closeIcon ${!isNavOpen && 'hideBar'} hide-large-view`} onClick={handleClickClose}></div>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'menu-link active-menu' : 'menu-link'} onClick={() => closeNav(setIsNavOpen(false))}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'menu-link active-menu' : 'menu-link'} onClick={() => closeNav(setIsNavOpen(false))}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'menu-link active-menu' : 'menu-link'} onClick={() => closeNav(setIsNavOpen(false))}>Services</NavLink>
                    <NavLink to="/why-choose-us" className={({ isActive }) => isActive ? 'menu-link active-menu' : 'menu-link'} onClick={() => closeNav(setIsNavOpen(false))}>Why choose us</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'menu-link active-menu' : 'menu-link'} onClick={() => closeNav(setIsNavOpen(false))}>Portfolio</NavLink>
                    <NavLink to="/meet-the-team" className={({ isActive }) => isActive ? 'menu-link active-menu' : 'menu-link'} onClick={() => closeNav(setIsNavOpen(false))}>Meet the Team</NavLink>
                </div>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'contact-link contact-active' : 'contact-link'} onClick={() => closeNav(setIsNavOpen(false))}>Contact Us</NavLink>

                <div className={theme === 'dark' ? 'fas fa-moon theme-mode-toggle hide-mobile-view' : 'fas fa-sun theme-mode-toggle hide-mobile-view'} onClick={handleToggleTheme}></div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;
