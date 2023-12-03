'use client';

import { Image } from 'next/dist/client/image-component';
import IconButton from './IconButton';
import NavbarItem from './NavbarItem';
import Overlay from './Overlay';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="floating">
            <div className="navbar-wrapper">
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '50px' }}
                />
                <div className="navbar-item-list">
                    <NavbarItem target="home">Home</NavbarItem>
                    <NavbarItem target="about-me">About Me</NavbarItem>
                    <NavbarItem target="experience">Experience</NavbarItem>
                    <NavbarItem target="projects">Projects</NavbarItem>
                    <NavbarItem target="my-story">My Story</NavbarItem>
                </div>
                <Overlay button={<IconButton icon="mingcute:menu-line" size={32} />} buttonClass="navbar-menu-button" />
            </div>
        </nav>
    );
}
