import Link from 'next/link'

export default function SecondBlog() {
    return (
        <div>
            <h1>Second Blog</h1>
            <ul>
                <li><Link href='/blogs/second/1'>Blog 1</Link></li>
                <li><Link href='/blogs/second/2'>Blog 2</Link></li>
                <li><Link href='/blogs/second/3'>Blog 3</Link></li>
            </ul>
        </div>
    );
}