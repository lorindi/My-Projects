import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import * as siteService from "../../../services/applicationService";
import * as commentService from "../../../services/commentService";
import { Comments } from "../Comments/Comments";
import { Contexts } from "../../../contexts/Contexts";
import { Edit } from "../Edit/Edit";
import reducer from "./commentReducer";

export const Details = () => {
  const { email, userId } = useContext(Contexts);
  const [site, setSite] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { id } = useParams();

  const [showComments, setShowComments] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    siteService.getOne(id).then(setSite);
    commentService.getAll(id).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        resultComments: result,
      });
    });
  }, [id]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(id, values.comment);
    newComment.author = { email };
    dispatch({
      type: "ADD_COMMENT",
      resultComments: newComment,
    });
  };
  const isOwner = userId === site._ownerId;
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

       
              <NavLink
                to="edit-site"
                onClick={() => {
                  setShowEdit(true);
                  setShowComments(false);
                }}
                className={styles.detailLink}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                  border: isActive
                    ? "1px solid lightgreen"
                    : "1px solid lightblue",
                })}
              >
                {" "}
                Edit
              </NavLink>
              <button className={styles.detailLink}>Delete</button>
     
        </div>
      </div>

      {showComments && (
        <Comments addCommentHandler={addCommentHandler} comments={comments} isOwner={isOwner}/>
      )}
      {showEdit && <Edit />}
    </div>
  );
};
