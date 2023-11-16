import * as commentService from "../../../services/commentService";

export const AddComments = () => {
  const addCommentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = await commentService.create(
      id,
      formData.get("username"),
      formData.get("comment")
    );
    console.log(newComment);
  };
  return (
    <div>
      <label htmlFor=""></label>
      <form action="">
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
  );
};
