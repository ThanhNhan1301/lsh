import Image from 'next/image'
import Link from 'next/link'
import {Fragment} from 'react'

export default function BrandName() {
    return (
        <Link href='/' passHref={true}>
            <div className='rounded-sm flex-center gap-[20px]'>
                <Image
                    src='/logo.jpg'
                    alt='logo'
                    layout='fixed'
                    width='50px'
                    height='50px'
                    className='rounded-sm'
                />
                <div className='text-white'>
                    <span className='block leading-6'>Công ty Luật TNHH</span>
                    <span className='block leading-6'>Luật sư Hà</span>
                </div>
            </div>
        </Link>
    )
}
