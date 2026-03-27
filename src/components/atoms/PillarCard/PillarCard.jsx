import styles from './PillarCard.module.css'

const PillarCard = ({icon, title, description}) => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.icon}>{icon}</div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
        </>
    )
}

export default PillarCard;