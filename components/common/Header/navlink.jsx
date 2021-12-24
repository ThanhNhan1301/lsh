import Link from 'next/link'
import {useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import NAVLINKS from '../../../contants/navlink'
import removeExp from '../../../lib/removeExp'

export default function Navlink({show}) {
    const [subNavlink, setSubNavlink] = useState(null)

    const handleChangeNavlink = (index) => {
        if (index === subNavlink) {
            return setSubNavlink(null)
        }
        return setSubNavlink(index)
    }
    return (
        <div
            className={`w-full bg-gray-700   transition-all duration-[3s] overflow-hidden ${
                show ? 'h-auto' : 'h-0'
            }`}
        >
            <ul className='px-5'>
                {NAVLINKS &&
                    NAVLINKS.map((link, index) => {
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
                                    <Link
                                        href={
                                            link.pathname === '/'
                                                ? link.pathname
                                                : `/${removeExp(link.pathname)}`
                                        }
                                        as={link.pathname}
                                    >
                                        {link.title}
                                    </Link>
                                    {link.sub && (
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

                                {link.sub &&
                                    link.sub.map((sub) => {
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
                                                        href={`/${removeExp(
                                                            link.pathname
                                                        )}/${removeExp(
                                                            sub.pathsubname
                                                        )}`}
                                                        as={`${link.pathname}${sub.pathsubname}`}
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
    )
}
