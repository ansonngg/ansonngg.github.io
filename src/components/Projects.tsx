import IconButton from './IconButton';
import Section from './Section';
import projects from '@/data/Projects.json';
import './Projects.scss';

const projectList: JSX.Element[] = [];

projects.forEach((item, itemIndex) => {
    const tagList: JSX.Element[] = [];
    const buttonList: JSX.Element[] = [];

    item.tags.forEach((tag, tagIndex) => {
        tagList.push(
            <div key={tagIndex} className="floating rounded-corner">
                {tag}
            </div>
        );
    });

    item.buttons.forEach((button, buttonIndex) => {
        buttonList.push(
            <IconButton key={buttonIndex} name={button.icon} link={button.link} />
        )
    });

    projectList.push(
        <div key={itemIndex} className="floating rounded-corner card-padding">
            <img className="rounded-corner" src={item.image} alt={item.image} />
            <div className="project-content">
                <b>{item.name}</b>
                <div className="tag-list">{tagList}</div>
                <div className="icon-button-list">{buttonList}</div>
            </div>
        </div>
    );
});

export default function Projects() {
    return (
        <Section title="Projects" link="projects-anchor">
            <div className="project-list">{projectList}</div>
        </Section>
    );
}
