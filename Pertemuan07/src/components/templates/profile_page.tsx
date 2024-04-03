import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPost from "../organism/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profile</Heading>
            <Post 
                title="Hello Tabibito!" 
                body="Baca tentang petualangan Saya."
            />
            <AllPost />         
        </Section2>
    )
}