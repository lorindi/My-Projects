import styles from './What.module.css'
export const What = () => {
  return (
    <section className="cystic-fibrosis-section">
      <button className="cystic-fibrosis-title">CYSTIC FIBROSIS?</button>
      <div className="cystic-fibrosis-dropdown-content">
        <div className="cystic-fibrosis-details">
          <div className="cystic-fibrosis-what">
            <h2 className="cystic-fibrosis-subtitle">WHAT</h2>

            <div>
              <p className="cystic-fibrosis-description">
                AN AUTOSOMAL RECESSIVE GENETIC DISORDER{" "}
              </p>
              <p className="cystic-fibrosis-description">
                THAT INVOLVES ABNORMAL TRANSPORT OF
              </p>
              <p className="cystic-fibrosis-description">
                CHLORIDE AND SODIUM ACROSS THE CELL
              </p>
              <p className="cystic-fibrosis-description">
                MEMBRANE CAUSING A THICK MUCUS
              </p>
              <p className="cystic-fibrosis-description">TO BUILD UP</p>
            </div>
          </div>
          <div className="cystic-fibrosis-affects">
            <h2 className="cystic-fibrosis-subtitle">AFFECTS</h2>
            <div className="cystic-fibrosis-organs">
              <div className="cystic-fibrosis-organ">
                <img
                  className="cystic-fibrosis-organ-lungs-image"
                  src="{% static 'images/organs/pngwing.com (7).png' %}"
                  alt=""
                />
                <h3 className="cystic-fibrosis-organ-title">LUNGS</h3>
              </div>
              <div className="cystic-fibrosis-organ">
                <img
                  className="cystic-fibrosis-organ-pancreas-image"
                  src="{% static 'images/organs/pngwing.com (9).png' %}"
                  alt=""
                />
                <h3 className="cystic-fibrosis-organ-title">PANCREAS</h3>
              </div>
              <div className="cystic-fibrosis-organ">
                <img
                  className="cystic-fibrosis-organ-liver-image"
                  src="{% static 'images/organs/pngwing.com (4).png' %}"
                  alt=""
                />
                <h3 className="cystic-fibrosis-organ-title">LIVER</h3>
              </div>
              <div className="cystic-fibrosis-organ">
                <img
                  className="cystic-fibrosis-organ-intestine-image"
                  src="{% static 'images/organs/pngwing.com (8).png' %}"
                  alt=""
                />
                <h3 className="cystic-fibrosis-organ-title">INTESTINE</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="cystic-fibrosis-symptoms">
          <div className="cystic-fibrosis-symptoms-info">
            <h2 className="cystic-fibrosis-subtitle">SYMPTOMS</h2>

            <ul className="cystic-fibrosis-symptoms-list" role="list">
              <li className="cystic-fibrosis-symptom">DIFFICULTY BREATHING</li>
              <li className="cystic-fibrosis-symptom">PERSISTENT COUGH</li>
              <li className="cystic-fibrosis-symptom">POOR GROWTH</li>
              <li className="cystic-fibrosis-symptom">LUNG AND SINUS</li>
              <li className="cystic-fibrosis-symptom">INFERTILITY</li>
              <li className="cystic-fibrosis-symptom">BOWEL ISSUES</li>
              <li className="cystic-fibrosis-symptom">DIABETES</li>
            </ul>
          </div>
          <div className="cystic-fibrosis-cause-info">
            <h2 className="cystic-fibrosis-subtitle">CAUSED BY</h2>
            <p className="cystic-fibrosis-cause">
              MUTATIONS IN THE GENE ENCODING FOR THE CFTR PROTEIN
            </p>
          </div>
        </div>
        <div className="cystic-fibrosis-facts">
          <div className="cystic-fibrosis-facts-info">
            <h2 className="cystic-fibrosis-subtitle">DID YOU KNOW?</h2>
            <ul className="cystic-fibrosis-facts-list">
              <li className="cystic-fibrosis-fact">
                DIFFERENT MUTATIONS IN THE CTFR GENE CAN CAUSE DIFFERENT
                SYMPTOMS
              </li>
              <li className="cystic-fibrosis-fact">
                THANKS TO GENETIC SCREENING AT BIRTH, MOST CHILDREN ARE
                DIAGNOSED BEFORE THE AGE OF TWO
              </li>
              <li className="cystic-fibrosis-fact">
                ADVANCED WITH CF WILL GO ON TO LIVE FULFILLING LIVES, INTO THEIR
                LATE 305 AND BEYOND
              </li>
            </ul>
          </div>
          <div className="cystic-fibrosis-cftr-info">
            <h2 className="cystic-fibrosis-subtitle">WHAT is CFTR ?</h2>
            <p className="cystic-fibrosis-cftr">
              Regulates sweat, digestive fluids, and mucus Controls the movement
              of chloride and sodium through cell membranes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
