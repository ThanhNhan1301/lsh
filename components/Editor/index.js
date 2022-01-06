import dynamic from 'next/dynamic'
import {memo} from 'react'
import {mudules, formats} from '../../contants/editorQuill'

const EditorQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
})

function EditorCustom({onChange, value}) {
    return (
        <EditorQuill
            value={value}
            theme='snow'
            modules={mudules}
            formats={formats}
            placeholder='Write something...'
            onChange={onChange}
        />
    )
}

export default memo(EditorCustom)
