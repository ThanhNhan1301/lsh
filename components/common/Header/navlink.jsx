import Link from 'next/link'
import NAVLINKS from '../../../contants/navlink'

export default function Navlink({show}) {
    return (
        <div
            className={`w-full bg-gray-700 text-white opacity-90 transition-all duration-[3s] overflow-hidden ${
                show ? 'h-auto' : 'h-0'
            }`}
        >
            <ul className='px-5'>
                {NAVLINKS &&
                    NAVLINKS.map((link) => {
                        return (
                            <li
                                key={link.pathname}
                                className='border-b border-dashed py-4'
                            >
                                <div className='font-semibold'>
                                    <Link href={link.pathname} passHref={true}>
                                        {link.title}
                                    </Link>
                                </div>

                                {link.sub &&
                                    link.sub.map((sub) => {
                                        return (
                                            <div className='pt-3 pl-5'>
                                                <Link
                                                    href={sub.pathsubname}
                                                    key={sub.pathsubname}
                                                    passHref={true}
                                                >
                                                    {sub.subname}
                                                </Link>
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
