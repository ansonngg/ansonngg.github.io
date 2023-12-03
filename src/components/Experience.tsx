import MDXLoader from './MDXLoader';
import Section from './Section';
import TableItem from './TableItem';
import experiences from '@/data/Experiences.json';
import './Experience.scss';

const experienceList: JSX.Element[] = [];

experiences.forEach((experience, experienceIndex) => {
    experienceList.push(
        <TableItem
            key={experienceIndex}
            title={<p>{experience.period}</p>}
            className="floating rounded-corner card-padding"
            titleWidth="180px"
        >
            <p>
                <b>{experience.title}</b> @ {experience.organization}
            </p>
            <MDXLoader file={experience.description} />
        </TableItem>
    );
});

export default function Experience() {
    return (
        <Section title="Experience" link="experience">
            <div className="experience-table">{experienceList}</div>
        </Section>
    );
}
