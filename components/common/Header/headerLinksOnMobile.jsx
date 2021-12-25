import Link from 'next/link'
import {Fragment, useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import navlinks from '../../../contants/navlink'

export default function HeaderLinks({show, handleShow}) {
    const [subNavlink, setSubNavlink] = useState(null)

    const handleChangeNavlink = (index) => {
        if (index === subNavlink) {
            return setSubNavlink(null)
        }
        return setSubNavlink(index)
    }

    const RenderLink = ({link, pathname, value}) => {
        if (!link) return <Fragment />
        return (
            <div
                className={`text-gray-400 hover:text-white 
                    overflow-hidden ${
                        subNavlink && subNavlink === value ? 'h-auto' : 'h-0'
                    }`}
            >
                <div className='pl-4 py-2' onClick={() => handleShow(!show)}>
                    <Link href={pathname}>{link.subname}</Link>
                </div>
            </div>
        )
    }

    return (
        <div
            className={`lg:hidden w-full bg-gray-700 transition-all duration-[3s] overflow-hidden ${
                show ? 'h-auto' : 'h-0'
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
                                    <div onClick={() => handleShow(!show)}>
                                        <Link href={item.pathname}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    {item.sub && (
                                        <div
                                            className={`w-6 h-6 cursor-pointer text-2xl transition ${
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
                                            <RenderLink
                                                key={sub.pathsubname}
                                                value={index}
                                                link={sub}
                                                pathname={`${item.pathname}${sub.pathsubname}`}
                                            />
                                        )
                                    })}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
