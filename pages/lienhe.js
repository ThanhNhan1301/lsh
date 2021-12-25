import Link from 'next/link'
import BannerPage from '../components/common/BannerPage'

export default function Lienhe() {
    return (
        <div className='w-full'>
            <BannerPage title={'LIÊN HỆ'} />
            <div className='m-5  rounded-sm py-3 px-5 lg:px-[40px]'>
                <h3 className='font-semibold uppercase leading-5 mb-8 text-lg text-blue-700'>
                    Công ty Luật TNHH Luật sư Hà
                </h3>
                <div className='pl-5'>
                    <p className='leading-8 mb-3'>
                        <span className='font-semibold'>Address: </span>Tầng
                        trệt 458/6, Đường 3 Tháng 2, Phường 12, Quận 10, Tp. Hồ
                        Chí Minh
                    </p>
                    <p className='leading-8 mb-3'>
                        <span className='font-semibold'>Mobile: </span>
                        <Link href={'tel:+84983451111'}>
                            <span className='text-blue-700 cursor-pointer'>
                                0983.45.11.11
                            </span>
                        </Link>
                    </p>
                    <p className='leading-8'>
                        <span className='font-semibold'>Email: </span>
                        <Link href={'mailto:luatsu.ha77@gmail.com'}>
                            <span className='text-blue-700 cursor-pointer'>
                                luatsu.ha77@gmail.com
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
