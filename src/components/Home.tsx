import GameEntity from './GameEntity';
import IconButton from './IconButton';
import IconHeadedText from './IconHeadedText';
import MDXLoader from './MDXLoader';
import './Home.scss';

export default function Home() {
    return (
        <div id="home">
            <div className="home-intro-wrapper">
                <div className="game-entity-wrapper">
                    <GameEntity entityId={0}>Hi, I'm Anson Ng</GameEntity>
                    <GameEntity entityId={1}>A Game Developer</GameEntity>
                </div>
                <MDXLoader file="HomeIntro" />
                <div className="icon-button-list">
                    <IconButton name="github" link="https://github.com/ansonngg" />
                    <IconButton name="linkedin" link="https://www.linkedin.com/in/anson-ng-11145b206/" />
                </div>
                <a className="download-button" href="ANSON_NG_Resume.docx" download="">
                    <IconHeadedText name="download"><b>Download Resume</b></IconHeadedText>
                </a>
            </div>
            <img className="floating" id="pfp" src="PFP.png" alt="Profile picture" />
        </div>
    );
}
