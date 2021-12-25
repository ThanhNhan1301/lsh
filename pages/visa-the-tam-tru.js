import Image from 'next/image'
import BannerPage from '../components/common/BannerPage'

export default function VisaTheTamTru() {
    return (
        <div className='w-full'>
            <BannerPage title='VISA – THẺ TẠM TRÚ' />
            <div className='m-5 bg-zinc-200 rounded-sm py-3 px-8 lg:px-[40px]'>
                <div className='text-[14px] text-gray-500 my-5'>
                    TH1 4, 2020 / HÀ ĐĂNG LUYỆN
                </div>
                <h3 className='mb-5 font-bold leading-6'>
                    VISA {'–'} THẺ TẠM TRÚ
                </h3>
                <h3 className='mb-5 font-bold leading-6 text-gray-500'>
                    QUY ĐỊNH VỀ THỊ THỰC (VISA), THẺ TẠM TRÚ của nhà đầu tư nước
                    ngoài
                </h3>
                <div>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Có hiệu lực từ ngày 01.07.2020.
                    </p>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Ngày 25.11.2019, Quốc hội đã thông qua Luật sửa đổi, bổ
                        sung một số Quy định pháp luật về thị thực (VISA), thẻ
                        tạm trú liên quan việc nhập cảnh, xuất cảnh, quá cảnh,
                        cư trú của người nước ngoài tại Việt Nam.
                    </p>
                    <div className='w-[350px] h-[250px] relative mx-auto my-4 shadow-md'>
                        <Image
                            src='/Image/2.jpg'
                            layout='fill'
                            alt='img_page'
                        />
                    </div>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Việc cấp Thị Thực (VISA) và Thẻ tạm trú (TRC) cho người
                        nước ngoài là nhà đầu tư có những thay đổi đáng chú ý và
                        chính thức có hiệu lực ngày 01.07.2020 như sau:
                    </p>
                    <h3 className='leading-10 mb-3 font-semibold'>
                        PHÂN LOẠI THỊ THỰC(VISA) CHO NHÀ ĐẦU TƯ {'–'} ký hiệu
                        “ĐT” theo mức vốn góp.
                    </h3>
                    <ul className=' list-inside list-decimal'>
                        <li className='leading-8 mb-3'>
                            ĐT1 {'-'} Cấp cho nhà đầu tư nước ngoài tại Việt Nam
                            và người đại diện cho tổ chức nước ngoài đầu tư tại
                            Việt Nam có vốn góp giá trị từ 100 tỷ đồng trở lên
                            hoặc đầu tư vào ngành, nghề ưu đãi đầu tư, địa bàn
                            ưu đãi đầu tư do Chính phủ quyết định.
                            <p className='leading-8 mb-3 text-blue-600'>
                                “ĐT1” có thời hạn không quá 5 năm
                            </p>
                        </li>
                        <li className='leading-8 mb-3'>
                            ĐT2 {'–'} Cấp cho nhà đầu tư nước ngoài tại Việt Nam
                            và người đại diện cho tổ chức nước ngoài đầu tư tại
                            Việt Nam có vốn góp giá trị từ 50 tỷ đồng đến dưới
                            100 tỷ đồng hoặc đầu tư vào ngành, nghề khuyến khích
                            đầu tư phát triển do Chính phủ quyết định.
                            <p className='leading-8 mb-3 text-blue-600'>
                                “ĐT2” có thời hạn không quá 5 năm
                            </p>
                        </li>

                        <li className='leading-8 mb-3'>
                            ĐT3 {'–'} Cấp cho nhà đầu tư nước ngoài tại Việt Nam
                            và người đại diện cho tổ chức nước ngoài đầu tư tại
                            Việt Nam có vốn góp giá trị từ 03 tỷ đồng đến dưới
                            50 tỷ đồng.
                            <p className='leading-8 mb-3 text-blue-600'>
                                “ĐT3” có thời hạn không quá 3 năm
                            </p>
                        </li>
                        <li className='leading-8 mb-3'>
                            ĐT4 {'–'} Cấp cho nhà đầu tư nước ngoài tại Việt Nam
                            và người đại diện cho tổ chức nước ngoài đầu tư tại
                            Việt Nam có vốn góp giá trị dưới 03 tỷ đồng.
                            <p className='leading-8 mb-3 text-blue-600'>
                                “ĐT4” có thời hạn không quá 12 tháng
                            </p>
                        </li>
                    </ul>
                    <h3 className='mb-5 font-bold leading-8'>
                        NHÀ ĐẦU TƯ CÓ VỐN GÓP DƯỚI 3 TỶ ĐỒNG {'–'} Không được
                        cấp TRC và Không được quyền bảo lãnh thân nhân.
                    </h3>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Người nước ngoài nhập cảnh bằng thị thực có ký hiệu ĐT1,
                        ĐT2, ĐT3, LĐ1, LĐ2 có thể được cấp thẻ tạm trú cùng loại
                        ký hiệu với thời hạn:
                    </p>
                    <ul className=' list-inside list-decimal'>
                        <li className='leading-8 mb-3 text-gray-500'>
                            Thẻ tạm trú có ký hiệu ĐT1 có thời hạn không quá 10
                            năm.
                        </li>
                        <li className='leading-8 mb-3 text-gray-500'>
                            Thẻ tạm trú có ký hiệu ĐT2 có thời hạn không quá 05
                            năm.
                        </li>

                        <li className='leading-8 mb-3 text-gray-500'>
                            Thẻ tạm trú có ký hiệu ĐT3 có thời hạn không quá 03
                            năm.
                        </li>
                        <li className='leading-8 mb-3 text-gray-500'>
                            Thẻ tạm trú có ký hiệu LĐ1, LĐ2 có thời hạn không
                            quá 02 năm.
                        </li>
                    </ul>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Đặc biệt, theo quy định mới có hiệu lực thì nhà đầu tư
                        sử dụng loại Thị thực (VISA) ký hiệu ĐT4 không được cấp
                        thẻ tạm trú và cũng không được bảo lãnh cho thân nhân
                        theo loại thị thực (Visa) ký hiệu “TT” như trước đây.
                    </p>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Theo Luật mới, Thị thực này chỉ cấp cho các đối tượng:
                    </p>
                    <p className='leading-8 mb-3 text-gray-500 italic'>
                        “TT {'–'} Cấp cho người nước ngoài là vợ, chồng, con
                        dưới 18 tuổi của người nước ngoài được cấp thị thực ký
                        hiệu LV1, LV2, LS, ĐT1, ĐT2, ĐT3, NN1, NN2, DH, PV1,
                        LĐ1, LĐ2 hoặc người nước ngoài là cha, mẹ, vợ, chồng,
                        con của công dân Việt Nam.”
                    </p>
                    <h3 className='mb-5 font-bold leading-8'>
                        CHUYỂN ĐỔI CÁC MỤC ĐÍCH THỊ THỰC TRONG NƯỚC {'–'} Không
                        phải xuất cảnh
                    </h3>
                    <p className='leading-8 mb-3 text-gray-500'>
                        Theo quy định mới, Thị thực không được chuyển đổi mục
                        đích, trừ các trường hợp sau đây:
                    </p>
                    <ul className=' list-inside list-decimal'>
                        <li className='leading-8 mb-3 text-gray-500'>
                            Có giấy tờ chứng minh là nhà đầu tư hoặc người đại
                            diện cho tổ chức nước ngoài đầu tư tại Việt Nam theo
                            quy định của pháp luật Việt Nam.
                        </li>
                        <li className='leading-8 mb-3 text-gray-500'>
                            Có giấy tờ chứng minh quan hệ là cha, mẹ, vợ, chồng,
                            con với cá nhân mời, bảo lãnh.
                        </li>

                        <li className='leading-8 mb-3 text-gray-500'>
                            Được cơ quan, tổ chức mời, bảo lãnh vào làm việc và
                            có giấy phép lao động hoặc xác nhận không thuộc diện
                            cấp giấy phép lao động theo quy định của pháp luật
                            về lao động.
                        </li>
                        <li className='leading-8 mb-3 text-gray-500'>
                            Nhập cảnh bằng thị thực điện tử và có giấy phép lao
                            động hoặc xác nhận không thuộc diện cấp giấy phép
                            lao động theo quy định của pháp luật về lao động.
                        </li>
                    </ul>
                    <div className='p-5 mb-5 bg-gray-400 text-gray-700 rounded-md sha'>
                        <div className='leading-8 mb-3 '>
                            Trường hợp chuyển đổi mục đích thị thực theo quy
                            định tại khoản này thì được cấp thị thực mới có ký
                            hiệu, thời hạn phù hợp với mục đích được chuyển đổi.
                            Trình tự, thủ tục cấp thị thực mới thực hiện theo
                            quy định.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
