import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { toast } from "react-toastify";
import * as siteService from "../../../services/applicationService";
import * as commentService from "../../../services/commentService";
import { Contexts } from "../../../contexts/Contexts";
import reducer from "./commentReducer";
import { useForm } from "../../../hooks/useForm";
import { pathToUrl } from "../../../utils/pathUtils";
import Path from "../../paths";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Details = () => {
  const navigate = useNavigate();
  const { email, userId } = useContext(Contexts);
  const [site, setSite] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { id } = useParams();
  const commentsSectionRef = useRef(null);
  const info = useRef(null);

  useEffect(() => {
    siteService.getOne(id).then(setSite);
    commentService.getAll(id).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        resultComments: result,
      });
    });
  }, [id]);

  const deleteButtonClickHandler = async () => {
    try {
      const hasConfirmed = confirm(
        `Are you sure you want to delete ${site.title}`
      );

      if (hasConfirmed) {
        await siteService.del(id);
        navigate("/sites");
      }
    } catch (error) {
      console.error("Error deleting site:", error);
      toast.error(`Error deleting site: ${error.message}`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(id, values.comment);
    newComment.owner = { email };
    dispatch({
      type: "ADD_COMMENT",
      resultComments: newComment,
    });
    values.comment = "";
  };
  const isOwner = userId === site._ownerId;

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comments: "",
  });
  // if (Math.random() < 0.5) {
  //   throw new Error("Game details error");
  // }

  const validateComment = () => {
    if (values.comment.length < 5) {
      toast.error("Comment should be longer than 5 characters", {
        style: {
          background: "#152534",
        },
      });
      return false;
    }
    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!validateComment()) {
      return;
    }

    onSubmit(e);
  };
  const deleteButtonClickComment = async (id) => {
    try {
      const deleteCommentUserConfirmation = window.confirm(
        `Are you sure you want to delete this comment?`
      );

      if (deleteCommentUserConfirmation) {
        await commentService.del(id);

        // Update the state using dispatch
        dispatch({
          type: "DELETE_COMMENT",
          payload: id,
        });

        // Optional: Log the filtered comments
        const filtered = comments.filter((c) => c._id !== id);
        toast.success("Comment deleted successfully!", {
          style: {
            background: "#152534",
          },
        });
        return filtered;
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error(`Error deleting comment: ${error.message}`, {
        style: {
          background: "#152534",
        },
      });
      throw Error(error);
    }
  };

  return (
    <div className={styles.masterContainerDetails}>
      <section className={styles.buttonLinks}>
        <NavLink
          className={styles.detailLink}
          onClick={() => info.current.scrollIntoView({ behavior: "smooth" })}
        >
          Info
        </NavLink>
        <NavLink
          className={styles.detailLink}
          onClick={() =>
            commentsSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Comments
        </NavLink>
        {isOwner && (
          <>
            <NavLink
              to={pathToUrl(Path.SiteEdit, { id })}
              // to={`/sites/${id}/edit`}
              className={styles.detailLink}
            >
              Edit
            </NavLink>
            <button
              className={styles.detailLink}
              onClick={deleteButtonClickHandler}
            >
              Delete
            </button>
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
          <div ref={info} className={styles.detailsInfo}>
            <h1 className={styles.detailTitle}>{site.title}</h1>
            <div className={styles.detailsDescriptions}>
              <p className={styles.detailDescription}>
                {site.shortDescription}
              </p>

              <p className={styles.detailDescription}>{site.description}</p>
            </div>
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
              <form
                className={styles.addCommentsForm}
                onSubmit={onSubmitHandler}
              >
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
                {comments.map(({ _id, text, owner: { email } }) => (
                  <li className={styles.commentsListElement} key={_id}>
                    <div className={styles.contentCommentAndButton}>
                      <p className={styles.comment}>{text}</p>
                      <button
                        onClick={() => deleteButtonClickComment(_id)}
                        className={styles.deleteCommentButton}
                      >
                        <FontAwesomeIcon
                          className={styles.faTrash}
                          icon={faTrash}
                        />
                      </button>
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
    </div>
  );
};
