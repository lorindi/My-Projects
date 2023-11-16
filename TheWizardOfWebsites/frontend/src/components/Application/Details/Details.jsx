import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import * as commentService from "../../../services/commentService";
import { Comments } from "../Comments/Comments";
import { Edit } from "../Edit/Edit";


export const Details = () => {
  const [showComments, setShowComments] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [site, setSite] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    siteService.getOne(id).then((site) => setSite(site));
    commentService.getAll().then((data) => setComments(data));
  }, [id]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      id,
      formData.get("username"),
      formData.get("comment")
    );
    console.log(newComment);
    console.log("addCommentHandler reference:", addCommentHandler);
  };
  return (
    <div className={styles.containerDetail}>
      <div>
        <img src={site.image} alt={site.title} />
        <h1 className={styles.detailTitle}>{site.title}</h1>
        <p className={styles.detailDescription}>{site.description}</p>
        <div className={styles.detailLinks}>
          <Link to="edit" onClick={() => {setShowEdit(true); setShowComments(false);}} className={styles.detailLink}>
            Edit
          </Link>
          <Link to="comments" onClick={() => {setShowComments(true); setShowEdit(false);}} className={styles.detailLink}>
            Comments
          </Link>
          <button className={styles.detailLink}>Delete</button>
          <button className={styles.detailLink}>Sing Up</button>
        </div>
          {/* <Outlet /> */}

      </div>

      {showComments && <Comments  addCommentHandler={addCommentHandler} comments={comments} setComments={setComments}/>  }
      {showEdit && <Edit />  }
    </div>
  );
};
