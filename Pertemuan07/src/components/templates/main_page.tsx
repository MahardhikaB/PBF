import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading>Judul</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Sub-Heading</Heading>
                    <Heading>Sub-Heading</Heading>
                    <Heading>Sub-Heading</Heading>
                    <Section>
                        <Heading>Sub-Sub-Heading</Heading>
                        <Heading>Sub-Sub-Heading</Heading>
                        <Heading>Sub-Sub-Heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}

