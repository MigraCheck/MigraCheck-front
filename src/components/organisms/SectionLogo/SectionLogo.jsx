import TitleLanding from '../../atoms/TitleLanding/TitleLanding';
import ButtonsLanding from '../../molecules/BtnLanding/ButtonsLanding';
import styles from './SectionLogo.module.css'

const SectionLogo = () => {
    return(
        <>
        <section className={styles.section}>
            <figure className={styles.side}>
                <img src='../../../../src/assets/logo.png' className={styles.logo} alt='Logo MigraCheck' ></img>
            </figure>
        
            <div className={styles.side}>
                <TitleLanding />
                <ButtonsLanding />
            </div>
        </section>
        </>
    )
}

export default SectionLogo;