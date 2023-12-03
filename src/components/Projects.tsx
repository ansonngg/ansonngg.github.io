import Image from 'next/image';
import IconButton from './IconButton';
import MDXLoader from './MDXLoader';
import Overlay from './Overlay';
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
            <div className="project-image">
                <Image
                    className="rounded-corner"
                    src={project.image}
                    alt={project.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div className="project-content">
                <b>{project.name}</b>
                <div className="tag-list">{tagList}</div>
                <div className="icon-button-list">{buttonList}</div>
                <Overlay button={<b>Read More</b>} buttonClass="download-button rounded-corner">
                    <b>{project.name}</b>
                    <Image
                        className="rounded-corner"
                        src={project.image}
                        alt={project.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="tag-list">{tagList}</div>
                    <div className="icon-button-list">{buttonList}</div>
                    <MDXLoader file={project.description} />
                </Overlay>
            </div>
        </div>
    );
});

export default function Projects() {
    return (
        <Section title="Projects" link="projects">
            <div className="project-list">{projectList}</div>
        </Section>
    );
}
