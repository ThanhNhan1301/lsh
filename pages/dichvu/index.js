import Link from 'next/link'
import BannerPage from '../../components/common/BannerPage'

export default function Dichvu() {
    return (
        <div>
            <BannerPage title={'DỊCH VỤ'} />
            <div className=' p-5'>
                <p className='leading-8 mb-3 pb-2'>
                    <span className='font-semibold'>
                        Công ty Luật TNHH Luật sư Hà
                    </span>{' '}
                    cung cấp các dịch vụ pháp lý chuyên nghiệp. Đến với Luật sư
                    Hà khách hàng sẽ nhận được những tư vấn pháp lý, tư vấn
                    chiến lược giải pháp kinh doanh với tính chuyên nghiệp cao
                    đảm bảo lợi ích tốt nhất. Chúng tôi luôn sát cánh cùng nhà
                    đầu tư, doanh nghiệp, tổ chức, cá nhận để tạo ra những
                    chuyển biến tích cực trong hoạt động quản lý, đầu tư, kinh
                    doanh thương mại,{' '}
                    <Link href='/dichvu/sohuutritue'>
                        <span className='cursor-pointer text-blue-600 pl-[3px]'>
                            sở hữu trí tuệ
                        </span>
                    </Link>{' '}
                    , tranh tụng….. nhằm kiểm soát và hạn chế rủi ro, nâng cao
                    hiệu suất kinh doanh và năng lực cạnh tranh, bảo về tối đa
                    lợi ích khách hàng.
                </p>
                <p className='leading-8 mb-3 uppercase font-semibold'>
                    Dịch vụ tại Luật sư Hà:
                </p>
                <ul className='list-inside list-disc pl-5'>
                    <li className='leading-8 mb-3'>
                        Tư vấn pháp lý về doanh nghiệp, thương mại.
                    </li>
                    <li className='leading-8 mb-3'>
                        Tư vấn pháp luật về bất động sản, xây dựng.
                    </li>

                    <li className='leading-8 mb-3'>Tài chính – Ngân hàng.</li>
                    <li className='leading-8 mb-3'>Sở hữu trí tuệ.</li>

                    <li className='leading-8 mb-3'>
                        Mua bán và Sáp nhập doanh nghiệp.
                    </li>
                    <li className='leading-8 mb-3'>Thuế.</li>
                    <li className='leading-8 mb-3'>Đầu tư.</li>
                </ul>
                <p className='leading-8 mb-3'>
                    Liên hệ với chúng tôi để được tư vấn và sử dụng dịch vụ pháp
                    lý hiệu quả!
                </p>
            </div>
        </div>
    )
}
