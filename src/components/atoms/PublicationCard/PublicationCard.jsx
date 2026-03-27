import styles from "./PublicationCard.module.css";

const PublicationCard = ({ publication }) => {
  return (
    <div className={styles.card}>
      
      <div className={styles.header}>
        <span className={styles.user}>
          {publication.user.name}
        </span>

        <span className={styles.procedure}>
          {publication.procedure}
        </span>
      </div>
      <p className={styles.message}>
        {publication.message}
      </p>

      <div className={styles.footer}>
        <span>{publication.dateCreation}</span>
      </div>

    </div>

  );
}

export default PublicationCard;