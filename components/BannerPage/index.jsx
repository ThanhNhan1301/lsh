import {useRouter} from 'next/router'

export default function BannerPage(props) {
    const router = useRouter()
    const title = props.title ? props.title : ''
    return (
        <div
            style={{
                backgroundImage:
                    router.pathname === '/'
                        ? 'url(/banner_home.jpg)'
                        : 'url(/banner_page.jpg)',
            }}
            className={`w-full bg-right-bottom bg-no-repeat bg-cover ${
                router.pathname === '/' ? 'h-[450px] bg-center' : 'h-[300px]'
            }
                flex justify-center items-center text-white text-center`}
        >
            <span className='text-xl  font-bold leading-8 px-8 lg:text-3xl'>
                {title}
            </span>
        </div>
    )
}
