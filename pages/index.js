import {Fragment} from 'react'
import BannerPage from '../components/BannerPage'
import {getPosts} from '../axiosClient'
import Link from 'next/link'

export default function Home({posts}) {
    return (
        <Fragment>
            <BannerPage title='CÙNG NHAU PHÁT TRIỂN' />
            <div className='p-12 lg:flex lg:flex-wrap lg:justify-between'>
                {posts &&
                    posts
                        .filter((post) => post.catelogry === 'tin-tuc')
                        .slice(0, 4)
                        .map((post) => {
                            return (
                                <Link
                                    href='post/[action]/[slug]'
                                    as={`/post/${post.catelogry}/${post.slug}`}
                                    key={post._id}
                                    passHref
                                >
                                    <div
                                        className='
                                    group w-full bg-gray-300 rounded-md 
                                    cursor-pointer shadow-lg mb-10
                                    lg:w-[48%]
                                '
                                    >
                                        <div className='h-[4px] bg-blue-500 rounded-t-md w-0 group-hover:w-full transition-[width]' />
                                        <h2 className='leading-6 text-center px-3 h-[100px] font-bold flex justify-center items-center'>
                                            {post.title}
                                        </h2>
                                    </div>
                                </Link>
                            )
                        })}
            </div>
        </Fragment>
    )
}

export async function getStaticProps() {
    let posts = []
    await getPosts()
        .then((response) => {
            posts = response.posts.map(({_id, title, slug, catelogry}) => {
                return {
                    _id,
                    title,
                    slug,
                    catelogry,
                }
            })
        })
        .catch(() => (posts = []))
    return {
        props: {
            posts,
        },
    }
}
