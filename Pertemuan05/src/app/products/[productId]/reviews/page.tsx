import Link from 'next/link'

const Reviews = () => {
    return (
        <div>
            <h1>Product Review Page</h1>
            <h1>Product Review List</h1>
            {/* buat agar list mengikuti product id */}
            <ul>
                <li><Link href='/products/1/reviews/1'>Product Review 1</Link></li>
                <li><Link href='/products/1/reviews/2'>Product Review 2</Link></li>
                <li><Link href='/products/1/reviews/3'>Product Review 3</Link></li>
            </ul>
        </div>
    )
}

export default Reviews