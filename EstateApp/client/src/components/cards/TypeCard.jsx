
import './TypeCard.scss'

function TypeCard({ cardClass, imageSrc, title, city, price, content, type }) {
  return (
    <div className={`card ${cardClass}`}>
      <img src={imageSrc} alt="" />
      <h2 className="cardTitle">{title}</h2>
      <p className="cardContent">{content}</p>
    </div>
  );
}

export default TypeCard;
