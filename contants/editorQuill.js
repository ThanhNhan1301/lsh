export const mudules = {
    toolbar: [
        [{font: []}],

        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{align: []}],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{header: 1}, {header: 2}], // custom button values

        [{list: 'ordered'}, {list: 'bullet'}],
        [{script: 'sub'}, {script: 'super'}], // superscript/subscript
        [{indent: '-1'}, {indent: '+1'}], // outdent/indent
        [{direction: 'rtl'}], // text direction

        ['link', 'image', 'formula'],
        [{color: []}, {background: []}], // dropdown with defaults from theme
        ['clean'], // remove formatting button
    ],
}

export const formats = [
    'background',
    'bold',
    'color',
    'font',
    'code',
    'italic',
    'link',
    'size',
    'strike',
    'script',
    'underline',
    'blockquote',
    'header',
    'indent',
    'list',
    'align',
    'direction',
    'code-block',
    'formula',
    'image',
    'video',
]
