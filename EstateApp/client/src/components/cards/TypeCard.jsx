import "./TypeCard.scss";

function TypeCard({ post, className }) {
  console.log(post);

  return (
    <div className={`${className}`}>
      <img src={post.images[0]} alt="" />
      <div>
        <span>{post.city}</span>
      </div>
    </div>
  );
}

export default TypeCard;
