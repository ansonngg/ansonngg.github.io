import ImageHeadedText from './ImageHeadedText';
import MDXLoader from './MDXLoader';
import Section from './Section';
import TableItem from './TableItem';
import skill from '@/data/Skill.json';
import './AboutMe.scss';

const skillList: JSX.Element[] = [];

skill.forEach((value, skillIndex) => {
    const skillItemList: JSX.Element[] = [];

    value.items.forEach((item, itemIndex) => {
        skillItemList.push(
            <ImageHeadedText
                key={itemIndex}
                image="CaretRightIcon.svg"
                margin="5px"
            >
                {item}
            </ImageHeadedText>
        );
    });

    skillList.push(
        <TableItem
            key={skillIndex}
            title={
                <ImageHeadedText image={value.icon} margin="10px">
                    {value.name}
                </ImageHeadedText>
            }
        >
            {skillItemList}
        </TableItem>
    );
});

export default function AboutMe() {
    return (
        <Section title="About Me" link="about-me-anchor">
            <MDXLoader file="SelfIntro" />
            <div className="skill-table">{skillList}</div>
        </Section>
    );
}
