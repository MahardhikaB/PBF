import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import RecentPost from "../molecules/recentpost";
import Post from "../atoms/post";

export default function AllPost() {
    return (
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <Post
                title="Mahardhika Bredy Dwi G S"
                body="2141720112"
            />
            <RecentPost />
        </Section2>
    );
}
