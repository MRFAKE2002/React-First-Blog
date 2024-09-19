// css
import style from "./Article.module.css";

// article image
// import articleImage from "../assets/images/articleImage.png"

function Article(props) {

  /* 
  console.log(props);
  '
  Object
    article: 
    {id: '1', imageUrl: 'https://k2bindia.com/wp-content/uploads/2015/08/React.png', articleName: 'article1', readTimer: '3', date: '1403/09/28', …}
    [[Prototype]]: 
    Object
  '
  */
  return (
    <div className={style.articleCart}>
        <img src={props.article.imageUrl} alt="" />
        <h3>{props.article.articleName}</h3>
        <p>{props.article.readTimer} مدت زمان خواندن مقاله </p>
    </div>
  );
}

export default Article;
