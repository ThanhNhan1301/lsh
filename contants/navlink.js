export default [
    {
        title: 'Trang chủ',
        pathname: '/',
    },
    {
        title: 'Giới thiệu',
        pathname: '/gioithieu',
        sub: [
            {
                subname: 'Giới thiệu chung',
                pathsubname: '/gioithieuchung',
            },
            {
                subname: 'Sứ mệnh & tầm nhìn',
                pathsubname: '/sumenhtamnhin',
            },
        ],
    },
    {
        title: 'Dịch vụ',
        pathname: '/dichvu',
        sub: [
            {
                subname: 'Bất động sản & Xây dựng',
                pathsubname: '/batdongsanxaydung',
            },
            {
                subname: 'Tranh tụng & giải quyết tranh chấp',
                pathsubname: '/tranhtungvatranhchap',
            },
            {
                subname: 'Doanh nghiệp & Thương mại',
                pathsubname: '/doanhnghiepthuongmain',
            },
            {
                subname: 'Sở hữu trí tuệ',
                pathsubname: '/sohuutritue',
            },
        ],
    },
    {
        title: 'Cộng sự',
        pathname: '/congsu',
        sub: [
            {
                subname: 'Luật sư',
                pathsubname: '/luatsu',
            },
            {
                subname: 'Chuyên viên tư vấn',
                pathsubname: '/chuyenvientuvan',
            },
            {
                subname: 'Hành chính',
                pathsubname: '/hanhchinh',
            },
        ],
    },
    {
        title: 'Bài viết',
        pathname: '/baiviet',
        sub: [
            {
                subname: 'Tin tức',
                pathsubname: '/tintuc',
            },
            {
                subname: 'Giấy phép',
                pathsubname: '/giayphep',
            },
            {
                subname: 'Tư vấn doanh nghiệp',
                pathsubname: '/tuvandoanhnghiep',
            },
        ],
    },
    {
        title: 'Liên hệ',
        pathname: '/lienhe',
    },
]
