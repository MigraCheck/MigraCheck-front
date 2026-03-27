import styles from "./BtnRegister.module.css";

import { useNavigate } from "react-router-dom";

const BtnRegister = () => {
    const navigate = useNavigate();

    const handleGoPublication = () => {
        navigate('/AllPublications');    
    };

  return (
    <>
      <button className={styles.register} onClick={handleGoPublication}>Entrar</button>
    </>
  );
};

export default BtnRegister;
