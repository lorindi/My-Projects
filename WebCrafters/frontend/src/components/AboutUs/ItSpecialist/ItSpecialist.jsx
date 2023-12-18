/* eslint-disable react/prop-types */
import styles from "../AboutUs.module.css";
import { Link } from "react-router-dom";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pathToUrl } from "../../../utils/pathUtils";
import Path from "../../paths";
import { toast } from "react-toastify";
import * as teamService from "../../../services/teamService";
import { useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";
export const ItSpecialist = ({
  _id,
  image,
  name,
  description,
  updateTeamData,
}) => {
  const { isAdmin } = useContext(Contexts);

  const deleteItSpecialistButtonClickHandler = async () => {
    try {
      const hasConfirmed = confirm(`Are you sure you want to delete ${name}`);

      if (hasConfirmed) {
        await teamService.del(_id);
        updateTeamData();
        // navigate('/about-us');
      }
    } catch (error) {
      console.error("Error deleting team:", error);
      toast.error(`Error deleting team: ${error.message}`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  return (
    <section
      className={`${styles.partTeam} ${styles.firstSection} ${styles.dark}`}
    >
      <img className={styles.partTeamImg} src={image} alt="" />
      <div className={styles.about}>
        <h1 className={`${styles.partTeamTitle} ${styles.dark}`}>{name}</h1>
        {isAdmin && (
          <div className={styles.partTeamInfo}>
            <Link
              className={`${styles.infoLink} ${styles.dark}`}
              to={pathToUrl(Path.EditItSpecialist, { id: _id })}
            >
              <FontAwesomeIcon className={styles.faPenToSquare} icon={faPenToSquare} />
            </Link>
            <button
              onClick={() => deleteItSpecialistButtonClickHandler()}
              className={styles.deleteItSpecialistButton}
            >
              <FontAwesomeIcon className={styles.faTrash} icon={faTrash} />
            </button>
          </div>
        )}
        <p className={styles.partTeamDescription}>{description} </p>
      </div>
    </section>
  );
};
