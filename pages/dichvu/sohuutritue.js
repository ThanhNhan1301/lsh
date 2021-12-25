import Link from 'next/link'
import BannerPage from '../../components/common/BannerPage'

export default function SohuuTritue() {
    return (
        <div>
            <BannerPage title={'SỞ HỮU TRÍ TUỆ'} />
            <div className=' p-5'>
                <p className='leading-8 mb-3 pb-2'>
                    Trong thời kỳ nền kinh tế Việt Nam nói riêng và thế giới nói
                    chung, đầy biến động và bất ổn như hiện nay, đặc biệt tại
                    Việt Nam tỉ lệ hàng giả, hàng nhái kém chất lượng tràn ngập
                    thị trường, không chỉ các nhãn hiệu nhỏ, mà ngay cả những
                    thương hiệu lớn cũng đều bị làm giả, các sản phẩm tràn ngập
                    thị trường khiến người tiêu dùng lao đao, ảnh hưởng trực
                    tiếp tới người tiêu dùng cũng như các đơn vị chính thống.
                    Chính vì vậy việc quan tâm tới bảo vệ quyền sở hữu trí tuệ
                    của các cá nhân, doanh nghiệp cần được quan tâm và chú
                    trọng.
                </p>
                <p className='leading-8 mb-3 pb-2'>
                    Tại <span className='font-semibold'> Luật sư Hà</span>,
                    chúng tôi có những luật sư giỏi, những chuyên gia giàu kinh
                    nghiệm trong lĩnh vực tư vấn quyền và bảo vệ sở hữu trí tuệ
                    cho các cá nhân, doanh nghiệp, tổ chức trong và ngoài nước.
                    Đội ngũ của chúng tôi đã từng thụ lý hàng trăm vụ việc liên
                    quan đến tranh chấp, bảo vệ quyền sở hữu trí tuệ với những
                    vụ việc có tình tiết phức tạp.
                </p>

                <p className='leading-8 mb-3 uppercase font-semibold'>
                    Dịch vụ của tư vấn sở hữu trí tuệ tại Luật sư Hà bao gồm:
                </p>
                <ul className='list-inside list-disc pl-5'>
                    <li className='leading-8 mb-3'>Tư vấn sở hữu trí tuệ.</li>
                    <li className='leading-8 mb-3'>
                        Kiểu dáng công nghiệp {'&'} giải pháp hữu ích.
                    </li>

                    <li className='leading-8 mb-3'>Sáng chế.</li>
                    <li className='leading-8 mb-3'>
                        Bảo hộ quyền sổ hữu công nghiệp.
                    </li>

                    <li className='leading-8 mb-3'>
                        Xử lý vi phạm, duy trì hiệu lực và chuyển giao các quyền
                        sở hữu trí tuệ.
                    </li>
                    <li className='leading-8 mb-3'>TNhượng quyền thương mạ.</li>
                </ul>
                <p className='leading-8 mb-3'>
                    Quý khách có nhu cầu hãy liên hệ với chúng tôi để được tư
                    vấn luật trực tiếp từ các luật sư và chuyên gia giỏi tại
                    <Link href='/dichvu/sohuutritue'>
                        <span className='cursor-pointer text-blue-600 pl-[3px]'>
                            www.luatsuha.vn
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
