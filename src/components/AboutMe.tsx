import { IconName } from './Icon';
import IconHeadedText from './IconHeadedText';
import MDXLoader from './MDXLoader';
import Section from './Section';
import TableItem from './TableItem';
import ULItem from './ULItem';
import skill from '@/data/Skill.json';
import './AboutMe.scss';

const skillList: JSX.Element[] = [];

skill.forEach((value, skillIndex) => {
    const skillItemList: JSX.Element[] = [];

    value.items.forEach((item, itemIndex) => {
        skillItemList.push(<ULItem key={itemIndex}>{item}</ULItem>);
    });

    skillList.push(
        <TableItem key={skillIndex} title={<IconHeadedText name={value.icon as IconName}>{value.name}</IconHeadedText>}>
            {skillItemList}
        </TableItem>
    );
});

export default function AboutMe() {
    return (
        <Section title="About Me" link="about-me-anchor">
            <div><MDXLoader file="SelfIntro" /></div>
            <div className="skill-table">{skillList}</div>
        </Section>
    );
}
