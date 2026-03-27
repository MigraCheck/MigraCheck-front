import styles from './Layout.module.css'
import { Outlet } from 'react-router';
import Footer from '../components/atoms/Footer/Footer'

const Layout = () => {
    return(
        <>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default Layout;