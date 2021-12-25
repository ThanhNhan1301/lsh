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
                        <Link href={'tel:+84983451111'} passHref>
                            <span className='text-blue-700 cursor-pointer'>
                                0983.45.11.11
                            </span>
                        </Link>
                    </p>
                    <p className='leading-8'>
                        <span className='font-semibold'>Email: </span>
                        <Link href={'mailto:luatsu.ha77@gmail.com'} passHref>
                            <span className='text-blue-700 cursor-pointer'>
                                luatsu.ha77@gmail.com
                            </span>
                        </Link>
                    </p>
                </div>
                <div
                    className='
                        rounded-md overflow-hidden w-[95%] h-[350px]
                        border m-5 shadow-lg p-1 max-w-[600px]
                    '
                >
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.181777201991!2d106.65909124248788!3d10.763631917215507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeeaf043453%3A0x2cde805894b358d8!2zNDU4LCA2IMSQxrDhu51uZyAzLzIsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1640420291842!5m2!1svi!2s'
                        width='100%'
                        height='100%'
                        allowFullScreen={true}
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
