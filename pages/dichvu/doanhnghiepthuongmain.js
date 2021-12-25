import Link from 'next/link'
import BannerPage from '../../components/common/BannerPage'

export default function Doanhnghiepthuongmain() {
    return (
        <div>
            <BannerPage title={'DOANH NGHIỆP & THƯƠNG MẠI'} />
            <div className='p-5'>
                <p className='leading-8 mb-3 pb-2'>
                    Ngày nay trong cac giao dịch liên quan đến Bất động sản, hay
                    các giao dịch về lĩnh vực xây dựng như mua bán, đặt cọc, cho
                    tặng, góp vốn bằng bất động sản, hay các giao dịch cho tặng,
                    cho thuê, luôn tiềm ẩn rất nhiều nguy cơ rủi ro pháp lý.
                    Muốn vậy các cá nhân, hay doanh nghiệp cần phải tự chủ động
                    đề phòng rủi ro, hoặc tìm đến luật sư tư vấn bất động sản,
                    xây dựng là một sự lựa chọn phù hợp.
                </p>
                <p className='leading-8 mb-3 pb-2'>
                    Tại <span className='font-semibold'> Luật sư Hà</span>,
                    chúng tôi sở hữu đội ngũ luật sư giỏi, chuyên gia có nhiều
                    kinh nghiệm trong lĩnh vực bất động sản và xây dựng, các
                    luật sư, chuyên gia có sự am hiểu sâu rộng trong lĩnh vực
                    của mình, khả năng phán đoán và dự báo trước vụ việc cụ thể,
                    và đem lại sự an toàn pháp lý cho khách hàng của mình.
                </p>

                <p className='leading-8 mb-3 uppercase font-semibold'>
                    Dịch vụ tư vấn “Bất động sản - Xây dựng” tại Luật sư Hà:
                </p>
                <ul className='list-inside list-disc pl-5'>
                    <li className='leading-8 mb-3'>
                        Tham gia, nghiên cứu các giao dịch bất động sản, xây
                        dựng.
                    </li>
                    <li className='leading-8 mb-3'>
                        Tư vấn các thủ tục cấp, xin giấy chứng nhận quyền sử
                        dụng đất.
                    </li>

                    <li className='leading-8 mb-3'>
                        Đàm phán và soạn thảo các hợp đồng liên quan.
                    </li>
                    <li className='leading-8 mb-3'>
                        Tư vấn các vấn đề về quy hoạch, bồi thường đất đai.
                    </li>

                    <li className='leading-8 mb-3'>
                        Mua bán bất động sản có yếu tố nước ngoài.
                    </li>
                    <li className='leading-8 mb-3'>
                        Tham gia đại diện uỷ quyền giải quyết tranh chấp đất
                        đai, hoà giải hoặc tranh tụng tại tòa án.
                    </li>
                </ul>
                <p className='leading-8 mb-3'>
                    Liên hệ với chúng tôi để được tư vấn và sử dụng dịch vụ pháp
                    lý hiệu quả!
                </p>
                <p className='leading-8 mb-3'>
                    Tham khảo thêm dịch vụ của Luật sư Hà tại{' '}
                    <Link href='/dichvu/sohuutritue' passHref>
                        <span className='cursor-pointer text-blue-600 pl-[3px]'>
                            www.luatsuha.vn
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
