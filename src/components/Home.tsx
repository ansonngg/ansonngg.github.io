import GameEntity from './GameEntity';
import ImageButton from './ImageButton';
import MDXLoader from './MDXLoader';
import './Home.scss';

export default function Home() {
    return (
        <div id="home">
            <div className="home-intro-wrapper">
                <GameEntity entityId={0}>Hi, I'm Anson Ng</GameEntity>
                <GameEntity entityId={1}>A Game Developer</GameEntity>
                <MDXLoader file="HomeIntro" />
                <div className="image-button-list">
                    <ImageButton
                        image="GithubIcon.svg"
                        link="https://github.com/ansonngg"
                    />
                    <ImageButton
                        image="LinkedinIcon.svg"
                        link="https://www.linkedin.com/in/anson-ng-11145b206/"
                    />
                </div>
            </div>
            <img
                className="floating"
                id="pfp"
                src="PFP.png"
                alt="Profile picture"
            />
        </div>
    );
}
