import ImageButton from './ImageButton';
import ImageHeadedText from './ImageHeadedText';
import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="social-media">
                    <div className="contact-list">
                        <ImageHeadedText image="EnvelopeIcon.svg" margin="10px">
                            ngkawai9886@gmail.com
                        </ImageHeadedText>
                    </div>
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
                <p className="secondary-text">
                    &copy; 2023 Anson Ng. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
