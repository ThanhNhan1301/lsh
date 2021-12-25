import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

import {FaStream} from 'react-icons/fa'
import HeaderLinkOnPc from './headerLinkOnPc'
import HeaderLinksOnMobile from './headerLinksOnMobile'
import Banner from './banner'

export default function Header() {
    const [showHeaderLink, setShowHeaderLink] = useState(false)

    return (
        <div>
            <div className='bg-gray-900 p-5 lg:px-[50px] flex justify-between items-center'>
                <div className='cursor-pointer flex-shrink-0'>
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
                <HeaderLinkOnPc />
                <div
                    className='lg:hidden text-white p-2 text-lg border border-white rounded-sm opacity-90 cursor-pointer'
                    onClick={() => setShowHeaderLink(!showHeaderLink)}
                >
                    <FaStream />
                </div>
            </div>
            <HeaderLinksOnMobile
                show={showHeaderLink}
                handleShow={setShowHeaderLink}
            />
            <Banner />
        </div>
    )
}
