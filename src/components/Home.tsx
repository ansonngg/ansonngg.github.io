import GameEntity from './GameEntity';
import IconButton from './IconButton';
import IconHeadedText from './IconHeadedText';
import MDXLoader from './MDXLoader';
import './Home.scss';
import '@/library/Game.css';

export default function Home() {
    return (
        <div id="home">
            <div className="home-intro-wrapper">
                <div className="game-entity-wrapper">
                    <GameEntity entityId={0}>Hi, I'm Anson Ng</GameEntity>
                    <GameEntity entityId={1}>A Game Developer</GameEntity>
                </div>
                <div className="home-intro">
                    <MDXLoader file="HomeIntro" />
                </div>
                <div className="icon-button-list">
                    <IconButton icon="mingcute:github-line" link="https://github.com/ansonngg" />
                    <IconButton icon="mingcute:linkedin-line" link="https://www.linkedin.com/in/anson-ng-11145b206/" />
                </div>
                <a className="download-button rounded-corner" href="ANSON_NG_Resume.docx" download="">
                    <IconHeadedText icon="mingcute:download-2-line">
                        <b>Download Resume</b>
                    </IconHeadedText>
                </a>
            </div>
            <img
                className="floating rounded-corner"
                id="profile-picture"
                src="ProfilePicture.png"
                alt="Profile picture"
            />
            <div className="timer">3</div>
        </div>
    );
}
