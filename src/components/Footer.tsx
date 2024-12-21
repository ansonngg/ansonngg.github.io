import IconButton from './IconButton';
import IconHeadedText from './IconHeadedText';
import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="social-media">
                    <div className="contact-list">
                        <IconHeadedText icon="mingcute:mail-line">ngkawai9886@gmail.com</IconHeadedText>
                    </div>
                    <div className="icon-button-list">
                        <IconButton icon="mingcute:github-line" link="https://github.com/ansonngg" />
                        <IconButton
                            icon="mingcute:linkedin-line"
                            link="https://www.linkedin.com/in/anson-ng-11145b206/"
                        />
                    </div>
                </div>
                <p className="secondary-text">&copy; 2024 Anson Ng. All rights reserved.</p>
            </div>
        </footer>
    );
}
