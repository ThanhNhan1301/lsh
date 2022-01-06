import Image from 'next/image'
import Link from 'next/link'
import {FaPhoneAlt, FaFacebookSquare} from 'react-icons/fa'

export default function ContactList() {
    return (
        <div
            className='
                fixed z-50 left-5 bottom-5
                flex flex-col items-center gap-3
            '
        >
            <div
                className='
                    cursor-pointer w-[50px] h-[50px] 
                    flex justify-center items-center
                    rounded-full bg-yellow-600 
                    opacity-80 hover:opacity-100 transition
                '
            >
                <Link href='https://zalo.me/0983451111' passHref>
                    <div className='w-[25px] h-[25px] relative '>
                        <Image
                            src='/icons/zalo.png'
                            layout='fill'
                            alt='icon-zalo'
                        />
                    </div>
                </Link>
            </div>
            <Link
                href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2Fhuy.dinhquang.39'
                passHref
            >
                <div
                    className='
                    cursor-pointer w-[50px] h-[50px] 
                    flex justify-center items-center
                    rounded-full bg-yellow-600 
                    text-blue-800 opacity-80 hover:opacity-100 transition
                '
                >
                    <FaFacebookSquare />
                </div>
            </Link>
            <Link href='tel:+84983451111' passHref>
                <div
                    className='
                    cursor-pointer w-[50px] h-[50px] 
                    flex justify-center items-center
                    rounded-full bg-yellow-600 text-blue-800  
                    opacity-80 hover:opacity-100 transition
                '
                >
                    <FaPhoneAlt />
                </div>
            </Link>
        </div>
    )
}
