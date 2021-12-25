import Link from 'next/link'
import {Fragment} from 'react'
import BannerPage from '../../components/common/BannerPage'

export default function Tintuc() {
    const data = [
        {
            title: 'THỦ TỤC ĐĂNG KÝ KẾT HÔN CÓ YẾU TỐ NƯỚC NGOÀI',
            path: '/thu-tuc-dang-ky-ket-hon-co-yeu-to-nuoc-ngoai',
        },
        {
            title: 'ĐĂNG KÝ THUẾ DOANH NGHIỆP TRỰC TUYẾN QUA MẠNG',
            path: '/dang-ky-thue-doanh-nghiep-truc-tuyen-qua-mang',
        },
        {
            title: 'VISA – THẺ TẠM TRÚ',
            path: '/visa-the-tam-tru',
        },
        {
            title: 'QUY ĐỊNH VỀ GIẢM VỐN ĐIỀU LỆ CÔNG TY MỚI CẬP NHẬT',
            path: '/quy-dinh-ve-giam-von-dieu-le-cong-ty-moi-cap-nhat',
        },
    ]
    return (
        <Fragment>
            <BannerPage title={'CHUYÊN MỤC: TIN TỨC'} />
            <div className='p-12 lg:flex lg:flex-wrap lg:justify-between'>
                {data.map((item) => {
                    return (
                        <Link href={item.path} key={item.path} passHref>
                            <div
                                className='
                                    group w-full bg-gray-300 rounded-md 
                                    cursor-pointer shadow-lg mb-10
                                    lg:w-[48%]
                                '
                            >
                                <div className='h-[4px] bg-blue-500 rounded-t-md w-0 group-hover:w-full transition-[width]' />
                                <h2 className='leading-6 text-center px-3 h-[100px] font-bold flex justify-center items-center'>
                                    {item.title}
                                </h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Fragment>
    )
}
