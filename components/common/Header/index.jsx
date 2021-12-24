import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import {FaStream} from 'react-icons/fa'
import navlinks from '../../../contants/navlink'

export default function Header() {
    const [showNavLink, setShowNavLink] = useState(false)
    const [subNavlink, setSubNavlink] = useState(null)

    const handleChangeNavlink = (index) => {
        if (index === subNavlink) {
            return setSubNavlink(null)
        }
        return setSubNavlink(index)
    }
    return (
        <div>
            <div className='bg-gray-900 p-5 flex justify-between items-center'>
                <div className='cursor-pointer'>
                    <Link href='/' passHref={true}>
                        <div className='rounded-sm flex items-center gap-[20px]'>
                            <Image
                                src='/logo.jpg'
                                alt='logo'
                                layout='fixed'
                                width='50px'
                                height='50px'
                                className='rounded-sm'
                            />
                            <div className='text-white'>
                                <span className='block leading-6'>
                                    Công ty Luật TNHH
                                </span>
                                <span className='block leading-6'>
                                    Luật sư Hà
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div
                    className='text-white p-2 text-lg border border-white rounded-sm opacity-90 cursor-pointer'
                    onClick={() => setShowNavLink(!showNavLink)}
                >
                    <FaStream />
                </div>
            </div>
            <div
                className={`w-full bg-gray-700   transition-all duration-[3s] overflow-hidden ${
                    showNavLink ? 'h-auto' : 'h-0'
                }`}
            >
                <ul className='px-5'>
                    {navlinks &&
                        navlinks.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className='border-b border-dashed py-5 last:border-b-0'
                                >
                                    <div
                                        className='
                                        font-semibold text-gray-300 hover:text-white 
                                        flex justify-between items-center
                                    '
                                    >
                                        <Link href={item.pathname}>
                                            {item.title}
                                        </Link>
                                        {item.sub && (
                                            <div
                                                className={`w-6 h-6 cursor-pointer text-2xl ${
                                                    subNavlink &&
                                                    subNavlink === index
                                                        ? 'rotate-180'
                                                        : 'rotate-0'
                                                }`}
                                                onClick={() =>
                                                    handleChangeNavlink(index)
                                                }
                                            >
                                                <BiChevronDown />
                                            </div>
                                        )}
                                    </div>

                                    {item.sub &&
                                        item.sub.map((sub) => {
                                            return (
                                                <div
                                                    key={sub.pathsubname}
                                                    className={`text-gray-400 hover:text-white 
                                                    overflow-hidden ${
                                                        subNavlink &&
                                                        subNavlink === index
                                                            ? 'h-auto'
                                                            : 'h-0'
                                                    }`}
                                                >
                                                    <div className='pl-4 py-2'>
                                                        <Link
                                                            href={`${item.pathname}${sub.pathsubname}`}
                                                        >
                                                            {sub.subname}
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </li>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}
