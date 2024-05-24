import "./Heroine.scss"
import loraImg from './1712475819082.png'
export const Heroine = () => {
    return (
        <div className="heroine">
          <div className="imageContainer">
            <img src={loraImg} alt="" />
          </div>
        </div>
    )
}