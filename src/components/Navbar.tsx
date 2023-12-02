'use client';

import { useState } from 'react';
import IconButton from './IconButton';
import NavbarItem from './NavbarItem';
import Overlay from './Overlay';
import './Navbar.scss';

export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <nav className="floating">
            <div className="navbar-wrapper">
                <img id="logo" src="Logo.png" alt="Logo" />
                <div className="navbar-item-list">
                    <NavbarItem target="home">Home</NavbarItem>
                    <NavbarItem target="about-me-anchor">About Me</NavbarItem>
                    <NavbarItem target="experience-anchor">Experience</NavbarItem>
                    <NavbarItem target="projects-anchor">Projects</NavbarItem>
                    <NavbarItem target="my-story-anchor">My Story</NavbarItem>
                </div>
                <Overlay button={<IconButton icon="mingcute:menu-line" size={32} />} buttonClass="navbar-menu-button" />
            </div>
        </nav>
    );
}
