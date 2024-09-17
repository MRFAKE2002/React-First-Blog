// css
import style from "./Article.module.css";

// article image
// import articleImage from "../assets/images/articleImage.png"

function Article(props) {

  console.log(props);

  return (
    <div className={style.articleCart}>
        <img src={props.article.imageUrl} alt="" />
        <h3>{props.article.articleName}</h3>
        <p>{props.article.readTimer} مدت زمان خواندن مقاله </p>
    </div>
  );
}

export default Article;
