import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";

import * as siteService from "../../../services/applicationService";
import * as commentService from "../../../services/commentService";
import { Contexts } from "../../../contexts/Contexts";
import reducer from "./commentReducer";
import { useForm } from "../../../hooks/useForm";
import { pathToUrl } from "../../../utils/pathUtils";
import Path from "../../paths";

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
    const hasConfirmed = confirm(
      `Are you sure you wants to delete ${site.title}`
    );

    if (hasConfirmed) {
      await siteService.del(id);
      navigate("/sites");
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
                {comments.map(({ _id, text, owner: { email } }) => (
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
    </div>
  );
};
