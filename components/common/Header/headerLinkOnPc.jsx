import Link from 'next/link'
import {Fragment} from 'react'
import navlink from '../../../contants/navlink'
import {BiChevronDown} from 'react-icons/bi'

export default function HeaderLinkOnPc() {
    if (!navlink) return <Fragment />
    return (
        <div>
            <ul className='hidden w-full lg:flex gap-[25px] '>
                {navlink.map((link, index) => {
                    return (
                        <li key={index} className='text-white relative group'>
                            <Link href={link.pathname} passHref>
                                <div className='opacity-80 hover:opacity-100 flex justify-center items-center cursor-pointer'>
                                    <span>{link.title}</span>
                                    {link.sub && (
                                        <div className='ml-1'>
                                            <BiChevronDown />
                                        </div>
                                    )}
                                </div>
                            </Link>

                            {link.sub && (
                                <div
                                    before=''
                                    className='
                                        absolute left-[50%] translate-x-[-50%] top-[180%] 
                                        transition scale-0 bg-green-600
                                        rounded-md group-hover:scale-100 
                                        before:content-[attr(before)] before:absolute
                                        before:h-[15px] before:left-0 before:right-0 before:bg-transparent
                                        before:top-[-15px]
                                    '
                                >
                                    {link.sub.map((sub) => {
                                        return (
                                            <Link
                                                key={sub.pathsubname}
                                                href={`${link.pathname}${sub.pathsubname}`}
                                                passHref
                                            >
                                                <div
                                                    className='
                                                        cursor-pointer p-3 border-b hover:bg-green-700
                                                        first:rounded-t-md last:rounded-b-md
                                                    '
                                                >
                                                    <span className='whitespace-nowrap'>
                                                        {sub.subname}
                                                    </span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
