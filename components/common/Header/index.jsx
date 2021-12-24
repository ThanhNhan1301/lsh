import Link from 'next/link'
import Image from 'next/image'
import {FaBars} from 'react-icons/fa'
import Navlink from './navlink'
import {Fragment} from 'react'
import {useState} from 'react'

export default function Header() {
    const [showNavLink, setShowNavLink] = useState(false)
    return (
        <Fragment>
            <div className='bg-gray-900 p-5 flex justify-between items-center'>
                <div>
                    <Link href='/' passHref={true}>
                        <a>
                            <div className='rounded-sm flex items-center gap-[20px]'>
                                <Image
                                    src='/logo.jpg'
                                    alt='logo'
                                    layout='fixed'
                                    width='45px'
                                    height='45px'
                                    className='rounded-sm'
                                />
                                <div className='text-white text-[14px]'>
                                    <span className='block leading-5'>
                                        Công ty Luật TNHH
                                    </span>
                                    <span className='block leading-5'>
                                        Luật sư Hà
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div
                    className='text-white p-[6px] border border-white rounded-sm opacity-90 cursor-pointer'
                    onClick={() => setShowNavLink(!showNavLink)}
                >
                    <FaBars />
                </div>
            </div>
            <Navlink show={showNavLink} />
        </Fragment>
    )
}
