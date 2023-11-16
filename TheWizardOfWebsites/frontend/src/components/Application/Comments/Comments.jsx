export const Comments = () => {


  return (
    <div>
      <div>
        <h3>Comments</h3>

        <div>
          <ul role="list">
    
          </ul>
        </div>
      </div>
      <div>
        <label htmlFor=""></label>
        <form  action="">
          <input type="text" name="username" placeholder="username" />
          <textarea
            name="comment"
            placeholder="Comment..."
            id=""
            cols="30"
            rows="10"
          >
            aaaaaaaaaaaa
          </textarea>
          <input type="submit" value="Add comment" />
        </form>
      </div>
    </div>
  );
};
