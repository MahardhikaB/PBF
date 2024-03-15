import Link from 'next/link'

export default function FirstBlog() {
    return (
        <div>
            <h1>First Blog</h1>
            <ul>
                <li><Link href='/blogs/first/1'>Blog 1</Link></li>
                <li><Link href='/blogs/first/2'>Blog 2</Link></li>
                <li><Link href='/blogs/first/3'>Blog 3</Link></li>
            </ul>
        </div>
    );
}