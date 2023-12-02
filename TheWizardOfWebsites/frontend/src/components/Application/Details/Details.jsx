import {  useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { NavLink } from "react-router-dom";
import {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import * as siteService from "../../../services/applicationService";
import * as commentService from "../../../services/commentService";
import { Contexts } from "../../../contexts/Contexts";
import reducer from "./commentReducer";
import { useForm } from "../../../hooks/useForm";
import { pathToUrl } from "../../../utils/pathUtils";
import Path from "../../paths";

export const Details = () => {
  const navigate = useNavigate()
  const { email, userId } = useContext(Contexts);
  const [site, setSite] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { id } = useParams();
  const commentsSectionRef = useRef(null);

  useEffect(() => {
    siteService.getOne(id).then(setSite);
    commentService.getAll(id).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        resultComments: result,
      });
    });
  }, [id]);

  const deleteButtonClickHandler = async() => {
    const hasConfirmed = confirm(`Are you sure you wants to delete ${site.title}`)

    if (hasConfirmed) {
      await siteService.del(id)
      navigate('/sites')
    }
  }

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(id, values.comment);
    newComment.author = { email };
    dispatch({
      type: "ADD_COMMENT",
      resultComments: newComment,
    });
    values.comment = "";
  };
  const isOwner = userId === site._ownerId;

  const initialValues = useMemo(
    () => ({
      comments: "",
    }),
    []
  );
  const { values, onChange, onSubmit } = useForm(
    addCommentHandler,
    initialValues
  );
  // if (Math.random() < 0.5) {
  //   throw new Error("Game details error");
  // }
  return (
    <>
      <section className={styles.buttonLinks}>
        <NavLink
          className={styles.detailLink}
          onClick={() =>
            commentsSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          style={({ isActive }) => ({
            color: isActive ? "lightgreen" : "lightblue",
            border: isActive ? "1px solid lightgreen" : "1px solid lightblue",
          })}
        >
          Comments
        </NavLink>
        {isOwner && (
          <>
            <NavLink
              to={pathToUrl(Path.SiteEdit, { id })}
              // to={`/sites/${id}/edit`}
              className={styles.detailLink}
              style={({ isActive }) => ({
                color: isActive ? "lightgreen" : "lightblue",
                border: isActive
                  ? "1px solid lightgreen"
                  : "1px solid lightblue",
              })}
            >
              Edit
            </NavLink>
            <button 
            className={styles.detailLink} 
            onClick={deleteButtonClickHandler}>
              Delete
            </button>
            {/* <NavLink
              to={pathToUrl(Path.SiteDelete, { id })}
              className={styles.detailLink}
              style={({ isActive }) => ({
                color: isActive ? "lightgreen" : "lightblue",
                border: isActive
                  ? "1px solid lightgreen"
                  : "1px solid lightblue",
              })}
            >
              Delete
            </NavLink> */}
          </>
        )}
      </section>

      <section className={styles.containerDetails}>
        <div className={styles.contentDetails}>
          <img
            className={styles.detailImage}
            src={site.image}
            alt={site.title}
          />
          <div className={styles.detailsInfo}>
            <h1 className={styles.detailTitle}>{site.title}</h1>
            <p className={styles.detailDescription}>{site.description}</p>
          </div>
        </div>
      </section>

      <section
        id="comments"
        className={styles.containerComments}
        ref={commentsSectionRef}
      >
        <div className={styles.contentComments}>
          <div className={styles.allComments}>
            <div className={styles.containerAddComments}>
              <form className={styles.addCommentsForm} onSubmit={onSubmit}>
                <div className={styles.addCommentsFormDiv}>
                  <textarea
                    className={styles.addCommentsFormTextarea}
                    name="comment"
                    value={values.comment}
                    onChange={onChange}
                    placeholder="Comment..."
                  ></textarea>
                </div>
                <input
                  className={styles.addCommentsFormButton}
                  type="submit"
                  value="Add comment"
                />
              </form>
            </div>

            <div>
              <ul className={styles.commentsList} role="list">
                {comments.map(({ _id, text }) => (
                  <li className={styles.commentsListElement} key={_id}>
                    <div>
                      <p className={styles.comment}>{text}</p>
                    </div>

                    <div className={styles.commentsCommentDescriptionLikes}>
                      <p className={styles.commentsUsername}>{email}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {comments.length === 0 && (
                <p className={styles.commentsNoComments}>No comments</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
