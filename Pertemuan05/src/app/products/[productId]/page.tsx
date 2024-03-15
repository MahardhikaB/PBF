import Link from 'next/link'

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <div>
        <h1>Details about product {params.productId}</h1>
        <h1>Review List</h1>
        <ul>
            <li><Link href='/products/1/reviews'>Review 1</Link></li>
            <li><Link href='/products/2/reviews'>Review 2</Link></li>
            <li><Link href='/products/3/reviews'>Review 3</Link></li>
        </ul>
    </div>
    )
}