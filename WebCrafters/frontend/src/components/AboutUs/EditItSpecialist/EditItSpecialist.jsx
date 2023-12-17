import styles from "./EditItSpecialist.module.css";
import { useNavigate, useParams } from "react-router-dom";
import * as teamService from "../../../services/teamService";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const EditItSpecialist = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [team, setTeam] = useState({
    image: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    teamService.getOne(id).then((result) => {
      setTeam(result);
    });
  }, [id]);

  const editItSpecialistSubmitHandler = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const teamData = Object.fromEntries(new FormData(form));

    const isEmpty = Object.values(teamData).every(
      (value) => value.trim() === ""
    );

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
      await teamService.edit(id, teamData); // Предаване на _id за идентификация на редактирания елемент
      navigate("/about-us");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setTeam((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.containerItSpecialistEditForm}>
      <h1>Edit IT Specialist</h1>
      <form
        action=""
        className={styles.EditItSpecialistForm}
        onSubmit={editItSpecialistSubmitHandler}
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
            onChange={onChange}
            value={team.image}
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
            onChange={onChange}
            value={team.name}
          />
        </div>
        <div>
          <label htmlFor="description" className={styles.EditItSpecialistLabel}>
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className={styles.EditItSpecialistTextarea}
            placeholder="At least ten characters"
            onChange={onChange}
            value={team.description}
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
