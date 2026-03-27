import styles from './BtnLogin.module.css'

const BtnLogin = ({text}) => {
    return(
        <>
        <button className={styles.login}>{text}</button>
        </>
    )
}

export default BtnLogin;