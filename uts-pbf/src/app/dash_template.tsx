import Image from 'next/image'
import LogoPutih from '/public/logo_putih.png'
import LogoHitam from '/public/logo_hitam.png'
import Avatar from '/public/avatar.jpg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default function DashTemplate({
    children,
    activeindex
}: {children: React.ReactNode, activeindex: number}) {
    return (
        <div className="flex bg-white w-screen h-screen">
            <aside className="w-1/6 bg-[#E3F3FF] flex flex-col p-4 justify-between">
                <div>
                    <div className='flex justify-center items-center'>
                        <Image src={LogoHitam} alt="logo" className='w-8' />
                        <h1 className='text-black font-bold p-0 mt-5 mb-5 ml-2 mr-2'>Fantastic Five</h1>
                    </div>
                    <ul className='text-black'>
                        <li className={`${activeindex == 0 ? 'bg-white' : ''} rounded-xl p-1`}>
                            <Link href={'/dashboard'} >Dashboard</Link>
                        </li>
                        <li className={`${activeindex == 1 ? 'bg-white' : ''} rounded-xl p-1`}>
                            <Link href={'/data_user'} >Data User</Link>
                        </li>
                        <li className={`${activeindex == 2 ? 'bg-white' : ''} rounded-xl p-1`}>
                            <Link href={'/laporan'} >History</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-evenly'>
                    <Image src={Avatar} alt="avatar" className='w-8 rounded-full' />
                    <div className='flex flex-col'>
                        <h1 className='text-black font-bold p-0 text-sm'>Admin</h1>
                        <h2 className='text-black font-light text-xs'>admin@gmail.com</h2>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEllipsis} style={{width : 30, color : 'black', scale : '75%'}} />
                    </div>
                </div>
            </aside>
            {children}
        </div>
    );
}