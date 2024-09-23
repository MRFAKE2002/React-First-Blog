// css
import style from "./CreateArticle.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Input from "../../components/input/Input";
import TextArea from "../../components/textarea/TextArea";

// libraries
import { useState } from "react";
import axios from "axios";

function CreateArticle(params) {
  /* 
    ma mitunim be jaye estefade az chand useState baraye value har input biaim az yek useState estefade konim vali bejash
    bayad yek object besazim va tush baraye value har input meghdar bezarim.
  */
  const [createArticle, setCreateArticle] = useState({
    articleName: "",
    imageUrl: "",
    date: "",
    author: "",
    content: "",
    readTimer: "",
  });

  /* 
    dar injd ma baraye inke betunim value dakhel har input ro begirim pas bayad az ghabeliat 'onchange' estefade konim 
    bayad yek arrow function benevisim va baraye zakhire value marbut be input bayad az 'useState' estefade konim.
  */
  const changeInputValue = (event) => {
    /*
      ma mitunim be jaye inke vase har input yek onchange motafavet besazim mitunim yek onchange benevisim vali dakhelesh bayed 
      moshakhas konim ke value marbut be kodum input hast ke ba estefade az 'switch, case' in kar  ro mikonim va baraye har input 
      yek 'name' mizarim.
    */

    /* 
      console.log(event);
      dakhel in 'event' meghdar ziadi vojud dare vali ba zadan 'event.target' manzur hamun input hast ke taghyir peida karde
      hala baraye inke tashkhis bedim taghyir marbut be kodum input miaim migim 'event.target.name' ba in mitunim 'name' marbut be kodum input
      ro befahmim va 'event.target.value' mitunim value marbut be input ro begirim
    */

    // switch (event.target.name) {
    //   case "articleName":
    //     /*
    //       alan mibinim ke ba gozashtan meghdar value input dakhel useState tamame object pak mishe va faghat mizane articleName gharar migire
    //       baraye inke baghiye maghadir object pak nashe bayad ye copy az tamame chizi ke dakhel moteghayer darim ro dakhel object bezarim
    //       va faghat oun mizani ke mikhayim ro taghyir bedim.
    //       dar inja ma dakhel moteghayer useState miaim az arrow function estefade mikonim. dalil asli ine ke betunim meghdar ghabli
    //       dakhel vorudi migirim ke mishe azash baraye copy gereftan estefade kard.
    //       hala dakhel function miaim meghdar ghabli dakhel object moteghayer useState ro copy mikonim daghighan dakhel object va
    //       amalan mohtaviat dakhel object moteghyer ro copy mikonim dakhel ye object dige va oun meghdari ke mikhaim ro az oun ja
    //       taghyir midim.
    //       dalil inke dar arrow function '() => ()' az parantez estefade kardim ine ke mikhaim harchi dakhelesh hast vasamun return beshe
    //       va dige niazi be neveshtan 'return' nist.
    //     */
    //     setCreateArticle((prevStateData) => ({
    //       // inja tammam mohtaviat object ke dakhel useState dashtim dakhel in object rikhte mishe mesl ye copy ke behesh sprate migan.
    //       ...prevStateData,
    //       // dar inja ham faghat mizan articleName darun object ro avaz mikonim va meghdar jadid ro gharar midim.
    //       articleName: event.target.value
    //     }))
    //     break;

    //   case "date":
    //     setCreateArticle({
    //       date:event.target.value
    //     })
    //     break;
    //   }

    /* 
      ma mitunim be jaye inke az 'switch, case' estefade konim mitunim ba estefade az 'name' ke be inout ha dadim be shart inke 'name'
      bayad daghighan barabar mizan avalie hamun dakhel object avalie bashe.
      alan mitunim be rahati az 'event.target.name' estefade konim va meghdar dehi konim.
    */
    setCreateArticle((prevStateData) => ({
      // inja tammam mohtaviat object ke dakhel useState dashtim dakhel in object rikhte mishe mesl ye copy ke behesh sprate migan.
      ...prevStateData,
      // dar inja ham faghat mizan 'name' darun object ro avaz mikonim va meghdar jadid ro gharar midim.
      [event.target.name]: event.target.value,
    }));
  };

  const createArticleAPI = (event) => {
    /*
      alan moikhaim ba estefade az 'axios' data ro befrestim va article jadid besazim.
    */
    axios.post("http://localhost:8000/data", {
      id: 9,
      articleName: createArticle.articleName,
      date: createArticle.date,
      imageUrl: createArticle.imageUrl,
      content: createArticle.content,
      author: createArticle.author,
      readTimer: createArticle.readTimer,
    });
  };

  return (
    <>
      <Navbar />
      <div className={style.createArticle}>
        <div className="container">
          <h1>ساخت مقاله جدید</h1>
          <Input
            label="عنوان"
            type="text"
            name="articleName"
            handleChange={changeInputValue}
          />
          <Input
            label="آدرس تصویر"
            type="text"
            name="imageUrl"
            handleChange={changeInputValue}
          />
          <Input
            label="مدت زمان خواندن"
            type="text"
            name="readTimer"
            handleChange={changeInputValue}
          />
          <Input
            label="تاریخ"
            type="text"
            name="date"
            handleChange={changeInputValue}
          />
          <Input
            label="نویسنده"
            type="text"
            name="author"
            handleChange={changeInputValue}
          />
          <TextArea
            label="متن"
            type="text"
            name="content"
            handleChange={changeInputValue}
          />
          <div className={style.createButton}>
            <button onClick={createArticleAPI}>ارسال</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateArticle;
