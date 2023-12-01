'use client';

import IconButton from './IconButton';
import NavbarItem from './NavbarItem';
import './Navbar.scss';

export default function Navbar() {
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
                <div className="navbar-menu">
                    <IconButton icon="mingcute:menu-line" size={32} />
                </div>
            </div>
        </nav>
    );
}
