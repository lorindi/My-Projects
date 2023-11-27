import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import * as siteService from "../../../services/applicationService";
import * as commentService from "../../../services/commentService";
import { Comments } from "../Comments/Comments";
// import { useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";
import { Edit } from "../Edit/Edit";

const reducer = (state, action) => {
  switch (action?.type) {
    case "GET_ALL_COMMENTS":
      return [...action.resultSites]
    case "ADD_COMMENT":
      return [...state, action.resultSites]
    default:
      return state;
  }
};

export const Details = () => {
  const { email } = useContext(Contexts);
  const [showComments, setShowComments] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [site, setSite] = useState({});
  // const [comments, setComments] = useState([]);
  const [comments, dispatch] = useReducer(reducer, []);

  const { id } = useParams();

  useEffect(() => {
    siteService.getOne(id).then((site) => setSite(site));

    commentService.getAll(id)
    .then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        resultSites: result,
      })
    });
  }, [id]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(id, formData.get("comment"));
    newComment.author = {email}
    // setComments((state) => [...state, { ...newComment, author: { email } }]);
    dispatch({type: "ADD_COMMENT", resultSites: newComment})
  };
  return (
    <div className={styles.containerDetails}>
      <div className={styles.contentDetails}>
        <img className={styles.detailImage} src={site.image} alt={site.title} />
        <div className={styles.detailsInfo}>
          <h1 className={styles.detailTitle}>{site.title}</h1>
          <p className={styles.detailDescription}>{site.description}</p>
        </div>
        <div className={styles.detailLinks}>
          <NavLink
            to="comments"
            onClick={() => {
              setShowComments(true);
              setShowEdit(false);
            }}
            className={styles.detailLink}
            style={({ isActive }) => ({
              color: isActive ? "lightgreen" : "lightblue",
              border: isActive ? "1px solid lightgreen" : "1px solid lightblue",
            })}
          >
            Comments
          </NavLink>
          <button className={styles.detailLink}>Sing Up</button>

          <NavLink
            to="edit"
            onClick={() => {
              setShowEdit(true);
              setShowComments(false);
            }}
            className={styles.detailLink}
            style={({ isActive }) => ({
              color: isActive ? "lightgreen" : "lightblue",
              border: isActive ? "1px solid lightgreen" : "1px solid lightblue",
            })}
          >
            Edit
          </NavLink>
          <button className={styles.detailLink}>Delete</button>
        </div>
        {/* <Outlet /> */}
      </div>

      {showComments && (
        <Comments
          addCommentHandler={addCommentHandler}
          comments={comments}
          // email={email}
        />
      )}
      {showEdit && <Edit />}
    </div>
  );
};
