import {useState} from 'react'

import {FaStream} from 'react-icons/fa'

import NavLink from './navlink'
import BrandName from './brandName'

export default function Header() {
    const [showHeaderLink, setShowHeaderLink] = useState(false)

    return (
        <div>
            <div className='bg-gray-900 p-5 lg:px-[50px] flex justify-between items-center'>
                <div className='cursor-pointer flex-shrink-0'>
                    <BrandName />
                </div>
                <div className='flex-1'>
                    <NavLink type='pc' />
                </div>

                <div
                    className='text-white p-2 text-lg border border-white rounded-sm opacity-90 cursor-pointer lg:hidden'
                    onClick={() => setShowHeaderLink(!showHeaderLink)}
                >
                    <FaStream />
                </div>
            </div>
            <NavLink
                type='mobile'
                show={showHeaderLink}
                handleIsShow={setShowHeaderLink}
            />
        </div>
    )
}
