import styles from "./Comments.module.css";
import { Contexts } from "../../../contexts/Contexts";
import { useContext } from "react";

export const Comments = ({ addCommentHandler, comments }) => {
  const { email } = useContext(Contexts);
  return (
    <div className={styles.containerComments}>
      <div className={styles.contentComments}>
        <div className={styles.allComments}>
          <h3 className={styles.commentsTitle}>Comments</h3>

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
        </div>
        <div className={styles.containerAddComments}>
          <form className={styles.addCommentsForm} onSubmit={addCommentHandler}>
            <div className={styles.addCommentsFormDiv}>
              {/* <input className={styles.addCommentsFormUsername} type="text" name="username" placeholder="Username" /> */}
              <textarea
                className={styles.addCommentsFormTextarea}
                name="comment"
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
      </div>
    </div>
  );
};
