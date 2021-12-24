import Image from 'next/image'
import Link from 'next/link'
import {Fragment, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import Navlink from './navlink'

export default function Header() {
    const [showNavLink, setShowNavLink] = useState(false)
    return (
        <Fragment>
            <div className='bg-gray-900 p-5 flex justify-between items-center'>
                <div>
                    <Link href='/' passHref={true}>
                        <div className='rounded-sm flex items-center gap-[24px]'>
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
                    <FaBars />
                </div>
            </div>
            <Navlink show={showNavLink} />
        </Fragment>
    )
}
