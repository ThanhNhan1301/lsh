export default function BannerPage({title}) {
    return (
        <div
            style={{backgroundImage: 'url(/bannerpage.jpg)'}}
            className='
                w-full h-[300px] bg-right-bottom
                flex justify-center items-center text-white text-center
            '
        >
            <span className='text-xl  font-bold leading-8 px-8 lg:text-3xl'>
                {title}
            </span>
        </div>
    )
}
