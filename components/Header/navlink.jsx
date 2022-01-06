import Link from 'next/link'
import {useEffect, useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
// import navlinks from '../../contants/navlink'
import {getPosts} from '../../axiosClient'

export default function Navlink({type, show, handleIsShow}) {
    const [changesubNavlink, setChangesubNavlink] = useState(null)
    const [navlinks, setNavlinks] = useState([])
    const screen = type ? type : 'mobile'

    useEffect(() => {
        const filterCatelogry = (arr = [], option) => {
            let value = []
            if (arr) {
                value = arr.filter((a) => a.catelogry === option)
            }
            return value
        }

        const setupPath = (listLink) => {
            if (listLink) {
                if (listLink.length > 1) {
                    return [
                        {
                            title: listLink[0].catelogry
                                .replace('-', ' ')
                                .toUpperCase(),
                            sub: listLink.map((link) => {
                                return {
                                    subname: link.title,
                                    pathsublink: `/post/${link.catelogry}/${link.slug}`,
                                }
                            }),
                        },
                    ]
                } else {
                    return [
                        {
                            title: listLink[0].catelogry
                                .replace('-', ' ')
                                .toUpperCase(),
                            pathname: `/post/${listLink[0].slug.toString()}`,
                        },
                    ]
                }
            }
        }
        const fetchData = async () => {
            try {
                const {posts} = await getPosts()
                const postGT = filterCatelogry(posts, 'gioi-thieu')
                const postDV = filterCatelogry(posts, 'dich-vu')
                const postBV = filterCatelogry(posts, 'tin-tuc')
                const postLH = filterCatelogry(posts, 'lien-he')
                const paths = [
                    {title: 'Trang chủ'.toUpperCase(), pathname: '/'},
                    ...setupPath(postGT),
                    ...setupPath(postDV),
                    ...setupPath(postBV),
                    ...setupPath(postLH),
                ]
                setNavlinks(paths)
            } catch (error) {
                // setNavlinks([])
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const showFnc = (screen, show) => {
        if (screen === 'pc') {
            return 'h-auto'
        } else {
            return show ? 'h-auto' : 'h-0'
        }
    }

    const handleOnChangeSubNavlink = (index) => {
        if (screen === 'mobile') {
            if (index === changesubNavlink) {
                setChangesubNavlink(null)
            } else {
                setChangesubNavlink(index)
            }
        }
    }

    const handleOnClickLink = () => {
        console.log(show)
        handleIsShow && handleIsShow(!show)
        setChangesubNavlink(null)
    }

    return (
        <div
            className={`
                w-full transition-[height] text-white
                bg-gray-800 lg:bg-gray-900
                lg:flex lg:justify-end lg:items-center
                select-none
                ${showFnc(screen, show)}
                ${
                    type === 'mobile'
                        ? 'overflow-hidden lg:hidden'
                        : 'hidden lg:block'
                }
            `}
        >
            <ul className='lg:flex justify-center items-center list-none'>
                {navlinks &&
                    navlinks.map((navlink, index) => {
                        return (
                            <li className='px-5' key={index}>
                                <div
                                    className={`
                                        py-6 lg:py-0 border-t border-dashed cursor-pointer 
                                        ${
                                            index === 0
                                                ? 'border-t-0'
                                                : 'border-t'
                                        }
                                        lg:border-0
                                    `}
                                    onClick={() =>
                                        handleOnChangeSubNavlink(index)
                                    }
                                >
                                    <div className='group px-3 relative'>
                                        <div className='flex justify-between items-center '>
                                            {!navlink.sub ? (
                                                <div
                                                    onClick={handleOnClickLink}
                                                >
                                                    <Link
                                                        href={navlink.pathname}
                                                        passHref={true}
                                                    >
                                                        {navlink.title}
                                                    </Link>
                                                </div>
                                            ) : (
                                                <span>{navlink.title}</span>
                                            )}
                                            {navlink.sub && (
                                                <div
                                                    className={`lg:ml-2 text-lg transition lg:group-hover:rotate-180 ${
                                                        changesubNavlink ===
                                                            index &&
                                                        screen === 'mobile'
                                                            ? 'rotate-180'
                                                            : 'rotate-0'
                                                    }`}
                                                >
                                                    <BiChevronDown />
                                                </div>
                                            )}
                                        </div>
                                        {navlink.sub && (
                                            <div
                                                before=''
                                                className={`
                                                            ${
                                                                changesubNavlink ===
                                                                    index &&
                                                                screen ===
                                                                    'mobile'
                                                                    ? ' h-auto'
                                                                    : 'h-0'
                                                            }
                                                            ${
                                                                screen ===
                                                                'mobile'
                                                                    ? 'overflow-hidden'
                                                                    : ''
                                                            }
                                                            transition-all cursor-pointer
                                                            lg:absolute lg:top-[100%] lg:left-[50%] lg:translate-x-[-50%] 
                                                            lg:mt-4
                                                            lg:bg-gray-700 
                                                            lg:scale-0 lg:group-hover:scale-100 lg:!h-auto
                                                            lg:before:content-[attr(before)]
                                                            lg:before:absolute lg:before:h-[24px] lg:before:w-full
                                                            lg:before:top-[-24px]
                                                            
                                                        `}
                                            >
                                                <div className='w-max'>
                                                    {navlink.sub.map((sub) => {
                                                        return (
                                                            <ul
                                                                key={
                                                                    sub.pathsublink
                                                                }
                                                                className='
                                                                    lg:border-b transition  
                                                                    lg:last:border-b-0 lg:p-4 
                                                                    lg:hover:bg-green-700
                                                                    first:mt-4 lg:first:mt-0
                                                                '
                                                            >
                                                                <li
                                                                    className='px-7 py-2 lg:p-0'
                                                                    onClick={
                                                                        handleOnClickLink
                                                                    }
                                                                >
                                                                    <Link
                                                                        href='/post/[action]/[slug]'
                                                                        as={
                                                                            sub.pathsublink
                                                                        }
                                                                    >
                                                                        {
                                                                            sub.subname
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
