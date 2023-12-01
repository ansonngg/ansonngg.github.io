import IconHeadedText from './IconHeadedText';
import MDXLoader from './MDXLoader';
import Section from './Section';
import TableItem from './TableItem';
import ULItem from './ULItem';
import skills from '@/data/Skills.json';
import './AboutMe.scss';

const skillList: JSX.Element[] = [];

skills.forEach((skill, skillIndex) => {
    const itemList: JSX.Element[] = [];

    skill.items.forEach((item, itemIndex) => {
        itemList.push(<ULItem key={itemIndex}>{item}</ULItem>);
    });

    skillList.push(
        <TableItem key={skillIndex} title={<IconHeadedText icon={skill.icon}>{skill.name}</IconHeadedText>}>
            {itemList}
        </TableItem>
    );
});

export default function AboutMe() {
    return (
        <Section title="About Me" link="about-me-anchor">
            <div>
                <MDXLoader file="SelfIntro" />
            </div>
            <div className="skill-table">{skillList}</div>
        </Section>
    );
}
