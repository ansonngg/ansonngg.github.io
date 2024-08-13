import { ReactElement } from 'react';
import MDXLoader from './MDXLoader';
import Section from './Section';
import Timeline from './Timeline';
import experiences from '@/data/Experiences.json';
import './Experience.scss';

const titles: ReactElement[] = [];
const contents: ReactElement[] = [];

experiences.forEach(experience => {
    titles.push(
        <p>
            {experience.period}
        </p>
    );
    
    contents.push(
        <>
            <p>
                <b>{experience.title}</b> @ {experience.organization}
            </p>
            <MDXLoader file={experience.description} />
        </>
    )
});

export default function Experience() {
    return (
        <Section title="Experience" link="experience">
            <Timeline titles={titles} contents={contents}></Timeline>
        </Section>
    );
}
