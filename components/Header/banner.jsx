export default function Banner() {
    return (
        <div
            style={{backgroundImage: 'url(/banner1.jpg)'}}
            className='
                w-full h-[300px] md:h-[500px]
                bg-cover bg-no-repeat bg-center
                flex justify-center items-center
            '
        >
            <div
                className='
                     
                    flex justify-center items-center
                    text-white uppercase font-semibold text-2xl italic
                '
            >
                <span>Hợp tác cùng phát triển</span>
            </div>
        </div>
    )
}
