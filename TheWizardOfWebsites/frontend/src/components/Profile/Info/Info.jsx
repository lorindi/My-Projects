import styles from './Info.module.css'

export const Info = () => {
  return (
    <div className={styles.userDetailsContentInfo}>
      <div className={styles.userDetailsSectionCurrentInfo}>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Username</span>

          <p className={styles.informationUser}></p>
        </div>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Name</span>
          <p className={styles.informationUser}></p>
        </div>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Email</span>
          <p className={styles.informationUser}></p>
        </div>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Date of birth</span>
          <p className={styles.informationUser}></p>
        </div>
      </div>

      <div className={styles.userDetailsSectionCurrentInfo}> 
        <div className={styles.currentDetails}>
          <span className={styles.span}>Gender</span>
          <p className={styles.informationUser}></p>
        </div>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Telephone</span>
          <p className={styles.informationUser}></p>
        </div>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Country</span>
          <p className={styles.informationUser}></p>
        </div>
        <div className={styles.currentDetails}>
          <span className={styles.span}>City</span>
          <p className={styles.informationUser}></p>
        </div>
      </div>
      <div className={styles.userDetailsSectionCurrentInfo}>
        <div className={styles.currentDetails}>
          <span className={styles.span}>Web sites</span>
          <p className={styles.informationUser}></p>
        </div>
      </div>
    </div>
  );
};
