import styles from "./CreateItSpecialist.module.css";
import { useNavigate } from "react-router-dom";
import * as teamService from "../../../services/teamService";
import { toast } from "react-toastify";

export const CreateItSpecialist = ({ updateTeamData }) => {
  const navigate = useNavigate();

  const createItSpecialistSubmitHandler = async (e) => {
    e.preventDefault();

    const teamData = Object.fromEntries(new FormData(e.currentTarget));
    // console.log("Team Data:", teamData);
    const isEmpty = Object.values(teamData).every((value) => value.trim() === "");

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
      await teamService.create(teamData);
      updateTeamData()
      navigate("/about-us");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.containerItSpecialistCreateForm}>
      <h1>Create IT Specialist</h1>
      <form
        action=""
        className={styles.createItSpecialistForm}
        onSubmit={createItSpecialistSubmitHandler}
        method="post"
      >
        <div>
          <label htmlFor="image" className={styles.createItSpecialistLabel}>
            Image
          </label>
          <input
            type="text"
            name="image"
            className={styles.createItSpecialistInput}
            placeholder="Must start with https://"
          />
        </div>
        <div>
          <label htmlFor="name" className={styles.createItSpecialistLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={styles.createItSpecialistInput}
            placeholder="At least three characters"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className={styles.createItSpecialistLabel}
          >
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className={styles.createItSpecialistTextarea}
            placeholder="At least ten characters"
          />
        </div>
        <input
          type="submit"
          className={styles.createItSpecialistButton}
          value="Create"
        />
      </form>
    </div>
  );
};
