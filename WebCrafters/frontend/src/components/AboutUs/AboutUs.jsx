import styles from "./AboutUs.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CreateItSpecialist } from "./CreateItSpecialist/CreateItSpecialist";
import * as teamService from "../../services/teamService";
import { ItSpecialist } from "./ItSpecialist/ItSpecialist";
import { OurTeam } from "./OurTeam/OurTeam";
import { Contexts } from "../../contexts/Contexts";
export const AboutUs = () => {
  const [team, setTeam] = useState({});
  const { isAdmin } = useContext(Contexts);
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const result = await teamService.getAll();
        setTeam(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTeamData();
  }, []);

  const create = useRef(null);

  // Define a function to update the team data
  const updateTeamData = async () => {
    try {
      const result = await teamService.getAll();
      setTeam(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.wholeTeam}>
        {isAdmin && (
          <article className={styles.wholeTeamLinks}>
            <NavLink
              className={styles.nameLinkCreate}
              onClick={() =>
                create.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Create
            </NavLink>
          </article>
        )}

        <OurTeam />

        {team.length > 0 && (
          <>
            {team.map((it) => (
              <ItSpecialist
                updateTeamData={updateTeamData}
                key={it._id}
                {...it}
              />
            ))}
          </>
        )}
        {isAdmin && (
        <div className={styles.contentCreateItSpecialist} ref={create}>
          {/* Pass the handler to the CreateItSpecialist component */}
          <CreateItSpecialist updateTeamData={updateTeamData} />
        </div>
        )}
      </div>
    </>
  );
};
