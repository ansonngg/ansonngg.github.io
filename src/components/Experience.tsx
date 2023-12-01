import MDXLoader from './MDXLoader';
import Section from './Section';
import TableItem from './TableItem';
import experience from '@/data/Experience.json';
import './Experience.scss';

const experienceList: JSX.Element[] = [];

experience.forEach((item, itemIndex) => {
    experienceList.push(
        <TableItem key={itemIndex} title={<p>{item.period}</p>} className="floating rounded-corner card-padding">
            <p>
                <b>{item.title}</b> @ {item.organization}
            </p>
            <MDXLoader file={item.description} />
        </TableItem>
    );
});

export default function Experience() {
    return (
        <Section title="Experience" link="experience-anchor">
            <div className="experience-table">{experienceList}</div>
        </Section>
    );
}
