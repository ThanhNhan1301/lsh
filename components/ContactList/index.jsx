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
                    rounded-full bg-green-400 
                    border-[2px] border-green-500
                '
            >
                <Link href='https://zalo.me/0983451111'>
                    <div className='w-[25px] h-[25px] relative '>
                        <Image
                            src='/icons/zalo.png'
                            layout='fill'
                            alt='icon-zalo'
                        />
                    </div>
                </Link>
            </div>

            <div
                className='
                    cursor-pointer w-[50px] h-[50px] 
                    flex justify-center items-center
                    rounded-full bg-green-400 border-[2px]
                    border-green-500 text-blue-800
                '
            >
                <Link
                    href={
                        'https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2Fhuy.dinhquang.39'
                    }
                >
                    <FaFacebookSquare />
                </Link>
            </div>

            <div
                className='
                    cursor-pointer w-[50px] h-[50px] 
                    flex justify-center items-center
                    rounded-full bg-green-400 border-[2px]
                    border-green-500 text-blue-800
                '
            >
                <Link href={'tel:+84983451111'}>
                    <FaPhoneAlt />
                </Link>
            </div>
        </div>
    )
}
