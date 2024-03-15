type Props = {
    params: {
        blogId: string
    }
}

export default function BlogDetails({ params }: Props) {
    return (
        <h1>Second Blog, Page {params.blogId}</h1>
    )
}