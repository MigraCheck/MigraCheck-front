import styles from './Header.module.css'
import BtnLogin from '../Buttons/BtnLogin/BtnLogin'

const Header = () => {
    return(
        <>
        <header className={styles.header}>
            <figure>
                <img src='../../../../src/assets/logo.png' className={styles.logo} alt="Logo Migracheck" />
            </figure>
            <div>
                <p className={styles.phrase}>Bienvenidos a Barcelona, somos compañeros de viaje!</p>
            </div>
            <nav className={styles.nav}>
            <BtnLogin text="Todas las publicaciones"/>
            <BtnLogin text="Mis publicaciones"/>
        </nav>
        </header>
        </>
    )
}

export default Header;