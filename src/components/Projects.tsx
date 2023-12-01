import IconButton from './IconButton';
import Section from './Section';
import projects from '@/data/Projects.json';
import './Projects.scss';

const projectList: JSX.Element[] = [];

projects.forEach((project, projectIndex) => {
    const tagList: JSX.Element[] = [];
    const buttonList: JSX.Element[] = [];

    project.tags.forEach((tag, tagIndex) => {
        tagList.push(
            <div key={tagIndex} className="floating rounded-corner">
                {tag}
            </div>
        );
    });

    project.buttons.forEach((button, buttonIndex) => {
        buttonList.push(<IconButton key={buttonIndex} icon={button.icon} link={button.link} />);
    });

    projectList.push(
        <div key={projectIndex} className="floating rounded-corner card-padding">
            <img className="rounded-corner" src={project.image} alt={project.image} />
            <div className="project-content">
                <b>{project.name}</b>
                <div className="tag-list">{tagList}</div>
                <div className="icon-button-list">{buttonList}</div>
                <div className="download-button rounded-corner">
                    <b>Read More</b>
                </div>
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
