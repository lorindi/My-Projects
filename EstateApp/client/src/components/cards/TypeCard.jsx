import "./TypeCard.scss";

function TypeCard({ post, className, onClick }) {

  return (
    <div className={`${className}`} onClick={onClick}>
      <img src={post.images[0]} alt="" />
      <div>
        <span>{post.city}</span>
      </div>
    </div>
  );
}

export default TypeCard;
