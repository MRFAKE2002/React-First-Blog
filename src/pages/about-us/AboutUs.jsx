// css
import style from "./AboutUs.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

// Image
import image from "../../components/assets/images/articleImage.png";

function AboutUs(params) {
  return (
    <div className={style.aboutUs}>
      <Navbar title="روزبه شاپ" />

      <div className="container">
        <h1>درباره ما</h1>
        <p>این درباره سایت وبلاگی هستش که توسط ریکت ساختم</p>
        <h3>فعالیت ما در کدان شهرها است؟</h3>
        <img src={image} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
