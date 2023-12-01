import MDXLoader from './MDXLoader';
import Section from './Section';

export default function MyStory() {
    return (
        <Section title="My Story" link="my-story-anchor">
            <MDXLoader file="MyStory" />
        </Section>
    );
}
