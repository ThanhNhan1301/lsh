export default [
    {
        title: 'Trang chủ',
        pathname: '/',
    },
    {
        title: 'Giới thiệu',
        pathname: '/gioi-thieu',
        sub: [
            {
                subname: 'Giới thiệu chung',
                pathsubname: '/gioi-thieu-chung',
            },
            {
                subname: 'Sứ mệnh & tầm nhìn',
                pathsubname: '/su-menh-tam-nhin',
            },
        ],
    },
    {
        title: 'Dịch vụ',
        pathname: '/dich-vu',
        sub: [
            {
                subname: 'Bất động sản & Xây dựng',
                pathsubname: '/bat-dong-san-xay-dung',
            },
            {
                subname: 'Tranh tụng & giải quyết tranh chấp',
                pathsubname: '/tranh-tung-va-tranh-chap',
            },
            {
                subname: 'Doanh nghiệp & Thương mại',
                pathsubname: '/doanh-nghiep-thuong-main',
            },
            {
                subname: 'Sở hữu trí tuệ',
                pathsubname: '/so-huu-tri-tue',
            },
        ],
    },
    {
        title: 'Cộng sự',
        pathname: '/cong-su',
        sub: [
            {
                subname: 'Luật sư',
                pathsubname: '/luat-su',
            },
            {
                subname: 'Chuyên viên tư vấn',
                pathsubname: '/chuyen-vien-tu-van',
            },
            {
                subname: 'Hành chính',
                pathsubname: '/hanh-chinh',
            },
        ],
    },
    {
        title: 'Bài viết',
        pathname: '/bai-viet',
        sub: [
            {
                subname: 'Tin tức',
                pathsubname: '/tin-tuc',
            },
            {
                subname: 'Giấy phép',
                pathsubname: '/giay-phep',
            },
            {
                subname: 'Tư vấn doanh nghiệp',
                pathsubname: '/tu-van-doanh-nghiep',
            },
        ],
    },
    {
        title: 'Liên hệ',
        pathname: '/lien-he',
    },
]
