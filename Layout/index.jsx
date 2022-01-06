import Footer from '../components/Footer'
import HeadTag from '../components/HeadTag'
import Header from '../components/Header'
import ContactList from '../components/ContactList'

export default function Layout({children}) {
    const styles = {
        main: {
            minHeight: '100vh',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
        },
        body: {
            flexGrow: '1',
        },
    }
    return (
        <div style={styles.main}>
            <div>
                <HeadTag />
                <Header />
            </div>
            <div style={styles.body}>{children}</div>
            <div>
                <ContactList />
                <Footer />
            </div>
        </div>
    )
}
