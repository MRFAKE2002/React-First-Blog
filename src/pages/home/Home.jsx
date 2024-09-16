// css
import style from "./Home.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/article/Article";

function Home(params) {
  return (
    <div className={style.homeWrapper}>
      <Navbar title="روزبه شاپ" />
      <div className="container">
        <h2>مقالات جدید</h2>
        <div className={style.homeArticles}>
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Home;
