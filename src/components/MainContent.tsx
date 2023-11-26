import AboutMe from './AboutMe';
import Home from './Home';
import './MainContent.scss';

export default function MainContent() {
    return (
        <main>
            <div className="main-wrapper">
                <Home />
                <AboutMe />
            </div>
        </main>
    );
}
