import Link from 'next/link'
import BannerPage from '../../components/common/BannerPage'

export default function Gioithieuchung() {
    return (
        <div>
            <BannerPage title='GIỚI THIỆU CHUNG' />
            <div className='p-5'>
                <p className='leading-8 mb-3'>
                    <span className='font-semibold'>
                        Công ty Luật TNHH Luật sư Hà
                    </span>{' '}
                    chính thức được Sở Tư pháp thành phố Hồ Chí Minh cấp giấy
                    phép hoạt động từ ngày 19/08/2019, có trụ sở chính đặt tại
                    Thành phố Hồ Chí Minh.
                </p>
                <p className='leading-8 mb-3'>
                    Được hình thành và phát triển trên sự tâm huyết của Luật sư
                    Hà Đăng Luyện và các cộng sự. Từ khi thành lập đến nay, với
                    kinh nghiệm trong lĩnh vực tư vấn và thực hiện dịch vụ pháp
                    lý, cùng với đội ngũ luật sư, chuyên viên pháp lý có kiến
                    thức chuyên sâu, tâm huyết với nghề và tận tụy với khách
                    hàng, do vậy chúng tôi nhận được sự tín nhiệm của rất nhiều
                    khách hàng, tiêu biểu có thể kể đến: Công ty và nhiều doanh
                    nghiệp khác.
                </p>
                <p className='leading-8 mb-3 font-semibold'>
                    Công ty luật Luật sư Hà – Tư vấn pháp luật{' '}
                    <Link href='tel:+84983451111' passHref>
                        <span className='text-blue-600 cursor-pointer pl-[2px]'>
                            0983.451111
                        </span>
                    </Link>
                </p>
                <p className='leading-8 mb-3 mt-2 font-semibold text-gray-500'>
                    LUẬT SƯ HÀ THỰC HIỆN VIỆC CUNG CẤP CHO KHÁCH HÀNG CÁC DỊCH
                    VỤ PHÁP LÝ NHƯ:
                </p>
                <ul className=' list-inside list-disc'>
                    <li className='leading-8 mb-3 text-gray-500'>
                        Tư vấn và xin các các giấy phép hoạt động cho các lĩnh
                        vực năng lượng, y tế, giáo dục, hoạt động phân phối,
                        xuất nhập khẩu, thương mại và dịch vụ, bất động sản, sở
                        hữu trí tuệ…
                    </li>
                    <li className='leading-8 mb-3 text-gray-500'>
                        Ngoài ra, chúng tôi còn là đơn vị tư vấn pháp lý thường
                        xuyên cho những doanh nghiệp, hỗ trợ pháp lý cho khách
                        hàng từ khi thành lập, cho tới suốt quá trình doanh
                        nghiệp hoạt động.
                    </li>

                    <li className='leading-8 mb-3 text-gray-500'>
                        Trực tiếp tham gia bảo vệ khách hàng là các yếu nhân
                        trong xã hội trong những vụ án tranh chấp dân sự, kinh
                        tế, cũng như vụ án hình sự tại các cơ quan nhà nước có
                        thẩm quyền, Trọng tài thương mại.
                    </li>
                </ul>
                <p className='leading-8 mb-3'>
                    <span className='font-semibold'>Luật sư Hà</span> đã sẵn
                    sàng cho một loạt các kế hoạch và chiến lược mới, mở rộng
                    nhanh chóng phạm vi và mức độ dịch vụ, nâng cao các tiêu
                    chuẩn dịch vụ quốc tế, trở thành một công ty luật có uy tín
                    ở trong nước và khu vực.
                </p>
                <p className='leading-8 mb-3'>
                    <span className='font-semibold'>Luật sư Hà</span> xin cảm ơn
                    tất cả khách hàng đã và đang sử dụng dịch vụ pháp lý của
                    chúng tôi và đã đồng hành với chúng tôi trong thời gian qua.
                    Với phương châm, trao giá trị và nhận giá trị tương đương,
                    đội ngũ nhân sự của chúng tôi cam kết nỗ lực làm việc để xây
                    dựng thương hiệu lớn mạnh, tiếp tục là đơn vị pháp lý tin
                    cậy của khách hàng.
                </p>
                <p className='leading-8 mb-5'>
                    <span className='font-semibold'>Luật sư Hà</span> luôn mang
                    đến sự an toàn và hài lòng cho Quý khách hàng.
                </p>
            </div>
        </div>
    )
}
