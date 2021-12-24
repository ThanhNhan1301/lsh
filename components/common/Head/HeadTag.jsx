import Head from 'next/head'

export default function HeadTag({title}) {
    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <title>
                {title
                    ? title
                    : 'Công ty TNHH Luật sư Hà - Dịch vụ uy tín - Phục vụ tận tâm'}
            </title>
            <link rel='shortcut icon' href='/logo.jpg' type='image/x-icon' />
        </Head>
    )
}
