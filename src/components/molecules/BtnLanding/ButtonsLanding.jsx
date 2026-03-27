import styles from './ButtonsLanding.module.css'

import BtnRegister from '../../atoms/Buttons/BtnRegister/BtnRegister'
import BtnLogin from '../../atoms/Buttons/BtnLogin/BtnLogin'

const ButtonsLanding = () => {
    return (
        <>
        <div className={styles.buttonGroup}>
            {/* <BtnLogin/> */}
            <BtnRegister/>
        </div>
        </>
    )
}

export default ButtonsLanding;