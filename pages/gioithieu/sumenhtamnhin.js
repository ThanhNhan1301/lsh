import Link from 'next/link'
import BannerPage from '../../components/common/BannerPage'

export default function Sumenhvatamnhin() {
    return (
        <div>
            <BannerPage title='GIỚI THIỆU CHUNG' />
            <div className='p-5'>
                <p className='leading-8 mb-3'>
                    <span className='font-semibold'>Luật sư Hà</span> mong muốn
                    mang đến cho xã hội sự cống hiến của nghề
                    <Link href='/congsu/luatsu'>
                        <span className='cursor-pointer text-blue-600 pl-[3px]'>
                            luật sư
                        </span>
                    </Link>
                    , mang đến sự công bằng cho xã hội, phụng sự cho sự phát
                    triển kinh tế và giúp các giao dịch dân sự, kinh doanh
                    thương mại và quyền con người được bảo vệ tối ưu nhất. Bên
                    cạnh đó, <span className='font-semibold'>Luật sư Hà </span>
                    cũng chú trọng đến sự phát triển của từng cá nhân làm việc
                    tại môi trường{' '}
                    <span className='font-semibold'>Luật sư Hà</span>, là một bệ
                    phóng để mỗi cá nhân được phát triển toàn diện và hạnh phúc.
                </p>
                <p className='leading-8 mb-3'>
                    <span className='font-semibold'>Luật sư Hà</span> hướng đến
                    là Công ty luật hoạt động đa lĩnh vực có uy tín lớn trong và
                    ngoài nước, với{' '}
                    <Link href='/congsu/chuyenvientuvan'>
                        <span className='cursor-pointer text-blue-600 pl-[3px]'>
                            đội ngũ luật sư
                        </span>
                    </Link>{' '}
                    chất lượng tại Việt Nam.
                </p>
                <p className='leading-8 mb-3'>
                    Trở thành Công ty luật tin cậy, hợp tác thường xuyên với
                    nhiều tổ chức, cá nhân trong và ngoài nước. Xây dựng{' '}
                    <span className='font-semibold'>Luật sư Hà</span> thành Công
                    ty Luật chuyên nghiệp có tâm và mang tầm quốc tế.
                </p>
            </div>
        </div>
    )
}
