export const Comments = ({ comments, setComments, addCommentHandler }) => {
  return (
    <div>
      <div>
        <h3>Comments</h3>

        <div>
          <ul role="list">
            {comments.map(({ _id, username, text }) => (
              <li key={_id}>
                
                <p>{username}: <strong>{text}</strong></p>
              </li>
            ))}
          </ul>
          {comments.lenght === 0 && <p>No comments</p>}
        </div>
      </div>
      <div>
        <label htmlFor=""></label>
        <form onSubmit={addCommentHandler}>
          <input type="text" name="username" placeholder="username" />
          <textarea name="comment" placeholder="Comment..."></textarea>
          <input type="submit" value="Add comment" />
        </form>
      </div>
    </div>
  );
};
