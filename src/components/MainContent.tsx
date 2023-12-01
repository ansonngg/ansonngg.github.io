import AboutMe from './AboutMe';
import Experience from './Experience';
import Home from './Home';
import MyStory from './MyStory';
import Projects from './Projects';
import './MainContent.scss';

export default function MainContent() {
    return (
        <main>
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <MyStory />
        </main>
    );
}
