import {useCallback, useState} from 'react'
import {Fragment} from 'react/cjs/react.production.min'
import {createPost, getCatelogies} from '../../../axiosClient'
import EditorCustom from '../../../components/Editor'
import HeadTag from '../../../components/HeadTag'

export default function CreatePost({catelogies}) {
    const [valueEditor, setValueEditor] = useState('')
    const [valueSelected, setValueSelected] = useState(undefined)
    const [valueTitlePost, setValueTitlePost] = useState('')

    const handleOnChangeValueEditor = useCallback((ev) => {
        setValueEditor(ev)
    }, [])

    const handleOnChangeSelected = (ev) => {
        const value = ev.target.value
        setValueSelected(value)
    }

    const handleChangeValueTitlePost = (ev) => {
        const value = ev.target.value
        setValueTitlePost(value)
    }

    const handleResetValueForm = () => {
        setValueEditor('')
        setValueTitlePost('')
        setValueSelected(undefined)
    }

    const handleOnSubmitForm = async (ev) => {
        ev.preventDefault()
        const dataSubmit = {
            title: valueTitlePost,
            blocks: valueEditor,
            catelogry: valueSelected,
        }
        try {
            await createPost(dataSubmit)
            handleResetValueForm()
        } catch (error) {}
    }

    return (
        <Fragment>
            <HeadTag title='Bài viết mới' />
            <div className='w-[98%] max-w-[1024px] m-auto mb-10'>
                <h3 className='text-center py-10 font-semibold text-xl'>
                    CREATE NEW POST
                </h3>
                <div className='w-full border rounded-md shadow-lg py-5'>
                    <form onSubmit={handleOnSubmitForm}>
                        <div className='pl-6'>
                            <div className='flex flex-col gap-1 mb-5'>
                                <label
                                    className='text-md font-semibold'
                                    htmlFor='editor-title'
                                >
                                    Tiêu đề bài đăng:
                                </label>
                                <input
                                    value={valueTitlePost}
                                    onChange={handleChangeValueTitlePost}
                                    id='editor-title'
                                    className='
                                    px-3 h-9 border-[2px] text-[15px] outline-none
                                    border-gray-600 opacity-80 max-w-[400px] rounded-md
                                    focus:opacity-100
                                '
                                    type='text'
                                    placeholder="Ex: 'Bộ luật lao động..."
                                    required={true}
                                />
                            </div>
                            <div className='flex flex-col gap-1 mb-5'>
                                <label
                                    className='text-md font-semibold'
                                    htmlFor='select-catelogry'
                                >
                                    Chọn danh mục bài đăng:
                                </label>
                                <select
                                    id='select-catelogry'
                                    name='select-catelogry'
                                    value={valueSelected}
                                    required={true}
                                    className='px-3 h-9 border-[2px] text-[15px] outline-none
                                    border-gray-600 opacity-80 max-w-[400px] rounded-md
                                    focus:opacity-100'
                                    onChange={handleOnChangeSelected}
                                >
                                    <option value={undefined}>
                                        --Danh mục---
                                    </option>
                                    {catelogies &&
                                        catelogies.map((catelogry) => {
                                            return (
                                                <option
                                                    key={catelogry._id}
                                                    value={catelogry.q}
                                                >
                                                    {catelogry.title}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className='top-0 leading-7'>
                            <EditorCustom
                                onChange={handleOnChangeValueEditor}
                                value={valueEditor}
                            />
                        </div>
                        <div className='mt-4 flex justify-end text-white pr-5 gap-5'>
                            <button className='px-4 py-1 rounded-md shadow-lg bg-green-500 opacity-90 active:opacity-100'>
                                Làm mới
                            </button>
                            <button
                                type='submit'
                                className='px-4 py-1 rounded-md shadow-lg bg-blue-500 opacity-90 active:opacity-100'
                            >
                                Lưu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export async function getStaticProps() {
    try {
        const catelogies = await getCatelogies()
        return {
            props: {
                catelogies: catelogies.catelogies,
            },
        }
    } catch (error) {
        return {
            props: {
                catelogies: [],
            },
        }
    }
}
