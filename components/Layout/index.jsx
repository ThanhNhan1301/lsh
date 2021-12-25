import Footer from '../common/Footer'
import HeadTag from '../common/Head/HeadTag'
import Header from '../common/Header'

export default function Layout({children}) {
    return (
        <div className='w-full min-h-screen'>
            <HeadTag />
            <Header />
            {children}
            <Footer />
        </div>
    )
}
