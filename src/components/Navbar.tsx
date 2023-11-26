import NavbarItem from './NavbarItem';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="floating">
            <div className="navbar-wrapper">
                <img id="logo" src="/Logo.png" alt="Logo" />
                <div className="navbar-item-list">
                    <NavbarItem target="home">Home</NavbarItem>
                    <NavbarItem target="about-me-anchor">About Me</NavbarItem>
                    <NavbarItem target="experience-anchor">Experience</NavbarItem>
                    <NavbarItem target="projects-anchor">Projects</NavbarItem>
                    <NavbarItem target="my-story-anchor">My Story</NavbarItem>
                </div>
                <img className="navbar-menu" src="BarsIcon.svg" alt="Bars" />
            </div>
        </nav>
    );
}
