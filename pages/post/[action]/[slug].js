import {Fragment, useEffect, useRef} from 'react'
import {getPosts} from '../../../axiosClient'
import HeadTag from '../../../components/HeadTag'
import BannerPage from '../../../components/BannerPage'

export default function Post({post}) {
    const refEditor = useRef({})
    useEffect(() => {
        refEditor.current.innerHTML = post.blocks
    })

    if (!post) return <Fragment />

    return (
        <Fragment>
            <HeadTag title={post.title} />
            <BannerPage title={post.title} />
            <div className='max-w-[1200px] m-auto p-8'>
                <div
                    className='ql-editor leading-8'
                    ref={(ref) => (refEditor.current = ref)}
                />
            </div>
        </Fragment>
    )
}

export async function getStaticPaths() {
    let result = []
    await Promise.all([
        getPosts({catelogry: 'tin-tuc'}),
        getPosts({catelogry: 'dich-vu'}),
        getPosts({catelogry: 'gioi-thieu'}),
    ])
        .then(([tt, dv, gt]) => {
            result = [...tt.posts, ...dv.posts, ...gt.posts].map((post) => {
                return {
                    params: {
                        slug: post.slug.toString(),
                        action: post.catelogry.toString(),
                    },
                }
            })
        })
        .catch(() => {
            result = []
        })
    return {
        paths: result,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {slug, action} = context.params
    try {
        const {posts} = await getPosts({catelogry: action, slug})
        return {
            props: {
                post: posts[0],
            },
        }
    } catch (error) {
        return {
            props: {
                post: [],
            },
        }
    }
}
