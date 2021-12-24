import Header from '../common/Header'

export default function Layout({children}) {
    return (
        <div className='w-full min-h-screen'>
            <Header />
            {children}
        </div>
    )
}
