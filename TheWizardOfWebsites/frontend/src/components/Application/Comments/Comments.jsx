import styles from "./Comments.module.css";
import { Contexts } from "../../../contexts/Contexts";
import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";
import { NavLink } from "react-router-dom";

export const Comments = ({ addCommentHandler, comments, isOwner }) => {
  const { email } = useContext(Contexts);
  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });
  return (
    <div className={styles.containerComments}>
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
                  <p className={styles.comment}>{text}</p>

                  <div className={styles.commentsCommentDescriptionLikes}>
                    <p className={styles.commentsUsername}>{email}</p>
                    <p className={styles.commentsLikes}>Likes</p>
                  </div>
                </li>
              ))}
            </ul>
            {comments.length === 0 && (
              <p className={styles.commentsNoComments}>No comments</p>
            )}
          </div>
       
          {isOwner && (
            <div>
              <NavLink
                to="comment-edit"
                className={styles.detailLink}
                >
                Edit
              </NavLink>
              <button className={styles.detailLink}>Delete</button>
            </div>
          )}
       
        </div>
      </div>
    </div>
  );
};
