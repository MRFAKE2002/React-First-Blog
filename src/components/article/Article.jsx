// css
import style from "./Article.module.css";

// article image
import articleImage from "../assets/images/articleImage.png"

function Article(props) {
  return (
    <div className={style.articleCart}>
        <img src={articleImage} alt="" />
        <h3>اسم مقاله</h3>
        <p>مدت زمان خواندن مقاله</p>
    </div>
  );
}

export default Article;
