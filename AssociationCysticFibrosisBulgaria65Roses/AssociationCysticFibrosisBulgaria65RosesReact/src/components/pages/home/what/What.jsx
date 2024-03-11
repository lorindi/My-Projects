import styles from './What.module.css'
export const What = () => {
  return (
    <section className={styles.cysticFibrosisSection}>
      <button className={styles.cysticFibrosisTitle}>CYSTIC FIBROSIS?</button>
      <div className={styles.cysticFibrosisDropdownContent}>
        <div className={styles.cysticFibrosisDetails}>
          <div className={styles.cysticFibrosisWhat}>
            <h2 className={styles.cysticFibrosisSubtitle}>WHAT</h2>

            <div>
              <p className={styles.cysticFibrosisDescription}>
                AN AUTOSOMAL RECESSIVE GENETIC DISORDER{" "}
              </p>
              <p className={styles.cysticFibrosisDescription}>
                THAT INVOLVES ABNORMAL TRANSPORT OF
              </p>
              <p className={styles.cysticFibrosisDescription}>
                CHLORIDE AND SODIUM ACROSS THE CELL
              </p>
              <p className={styles.cysticFibrosisDescription}>
                MEMBRANE CAUSING A THICK MUCUS
              </p>
              <p className={styles.cysticFibrosisDescription}>TO BUILD UP</p>
            </div>
          </div>
          <div className={styles.cysticFibrosisAffects}>
            <h2 className={styles.cysticFibrosisSubtitle}>AFFECTS</h2>
            <div className={styles.cysticFibrosisOrgans}>
              <div className={styles.cysticFibrosisOrgan}>
                <img
                  className={styles.cysticFibrosisOrganLungsImage}
                  src="{% static 'images/organs/pngwing.com (7).png' %}"
                  alt=""
                />
                <h3 className={styles.cysticFibrosisOrganTitle}>LUNGS</h3>
              </div>
              <div className={styles.cysticFibrosisOrgan}>
                <img
                  className={styles.cysticFibrosisOrganPancreasImage}
                  src="{% static 'images/organs/pngwing.com (9).png' %}"
                  alt=""
                />
                <h3 className={styles.cysticFibrosisOrganTitle}>PANCREAS</h3>
              </div>
              <div className={styles.cysticFibrosisOrgan}>
                <img
                  className={styles.cysticFibrosisOrganLiverImage}
                  src="{% static 'images/organs/pngwing.com (4).png' %}"
                  alt=""
                />
                <h3 className={styles.cysticFibrosisOrganTitle}>LIVER</h3>
              </div>
              <div className={styles.cysticFibrosisOrgan}>
                <img
                  className={styles.cysticFibrosisOrganIntestineImage}
                  src="{% static 'images/organs/pngwing.com (8).png' %}"
                  alt=""
                />
                <h3 className={styles.cysticFibrosisOrganTitle}>INTESTINE</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cysticFibrosisSymptoms}>
          <div className={styles.cysticFibrosisSymptomsInfo}>
            <h2 className={styles.cysticFibrosisSubtitle}>SYMPTOMS</h2>

            <ul className={styles.cysticFibrosisSymptomsList} role="list">
              <li className={styles.cysticFibrosisSymptom}>DIFFICULTY BREATHING</li>
              <li className={styles.cysticFibrosisSymptom}>PERSISTENT COUGH</li>
              <li className={styles.cysticFibrosisSymptom}>POOR GROWTH</li>
              <li className={styles.cysticFibrosisSymptom}>LUNG AND SINUS</li>
              <li className={styles.cysticFibrosisSymptom}>INFERTILITY</li>
              <li className={styles.cysticFibrosisSymptom}>BOWEL ISSUES</li>
              <li className={styles.cysticFibrosisSymptom}>DIABETES</li>
            </ul>
          </div>
          <div className={styles.cysticFibrosisCauseInfo}>
            <h2 className={styles.cysticFibrosisSubtitle}>CAUSED BY</h2>
            <p className={styles.cysticFibrosisCause}>
              MUTATIONS IN THE GENE ENCODING FOR THE CFTR PROTEIN
            </p>
          </div>
        </div>
        <div className={styles.cysticFibrosisFacts}>
          <div className={styles.cysticFibrosisFactsInfo}>
            <h2 className={styles.cysticFibrosisSubtitle}>DID YOU KNOW?</h2>
            <ul className={styles.cysticFibrosisFactsList}>
              <li className={styles.cysticFibrosisFact}>
                DIFFERENT MUTATIONS IN THE CTFR GENE CAN CAUSE DIFFERENT
                SYMPTOMS
              </li>
              <li className={styles.cysticFibrosisFact}>
                THANKS TO GENETIC SCREENING AT BIRTH, MOST CHILDREN ARE
                DIAGNOSED BEFORE THE AGE OF TWO
              </li>
              <li className={styles.cysticFibrosisFact}>
                ADVANCED WITH CF WILL GO ON TO LIVE FULFILLING LIVES, INTO THEIR
                LATE 305 AND BEYOND
              </li>
            </ul>
          </div>
          <div className={styles.cysticFibrosisCftrInfo}>
            <h2 className={styles.cysticFibrosisSubtitle}>WHAT is CFTR ?</h2>
            <p className={styles.cysticFibrosisCftr}>
              Regulates sweat, digestive fluids, and mucus Controls the movement
              of chloride and sodium through cell membranes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
