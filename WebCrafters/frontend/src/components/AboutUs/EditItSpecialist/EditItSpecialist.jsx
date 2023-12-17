import styles from './EditItSpecialist.module.css'
import { useNavigate } from "react-router-dom";
import * as teamService from "../../../services/teamService";
import { toast } from "react-toastify";

export const EditItSpecialist = () => {
  const navigate = useNavigate();

  const EditItSpecialistSubmitHandler = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const teamData = Object.fromEntries(new FormData(form));
    console.log("Team Data:", teamData);
    const isEmpty = Object.values(teamData).every(
      (value) => value.trim() === ""
    );

    try {
      await teamService.edit(teamData);
      form.reset();
      

    } catch (err) {
      console.log(err);
    }

    if (isEmpty) {
      toast.error("All fields cannot be empty", {
        style: {
          background: "#152534",
        },
      });
      return;
    }

    // Проверка за image
    if (!teamData.image.startsWith("https://")) {
      toast.error("Image URL should start with 'https://'", {
        style: {
          background: "#152534",
        },
      });
      return;
    }

    if (teamData.name.length < 3) {
      toast.error("Name should be at least 3 characters long", {
        style: {
          background: "#152534",
        },
      });
      return;
    }

    if (teamData.description.length < 10) {
      toast.error("Description should be at least 10 characters long", {
        style: {
          background: "#152534",
        },
      });
      return;
    }
    try {
      await teamService.edit(teamData);
      navigate("/about-us");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.containerItSpecialistEditForm}>
      <h1>Create IT Specialist</h1>
      <form
        action=""
        className={styles.EditItSpecialistForm}
        onSubmit={EditItSpecialistSubmitHandler}
        method="post"
      >
        <div>
          <label htmlFor="image" className={styles.EditItSpecialistLabel}>
            Image
          </label>
          <input
            type="text"
            name="image"
            className={styles.EditItSpecialistInput}
            placeholder="Must start with https://"
          />
        </div>
        <div>
          <label htmlFor="name" className={styles.EditItSpecialistLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={styles.EditItSpecialistInput}
            placeholder="At least three characters"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className={styles.EditItSpecialistLabel}
          >
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className={styles.EditItSpecialistTextarea}
            placeholder="At least ten characters"
          />
        </div>
        <input
          type="submit"
          className={styles.EditItSpecialistButton}
          value="Edit"
        />
      </form>
    </div>
  );
};
