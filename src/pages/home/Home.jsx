// css
import style from "./Home.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/article/Article";

// hooks
import { useEffect, useState } from "react";

function Home(params) {
  /*
    useState: yek hook ke amalan mesle yek moteghayer amal mikone va meghdar dar khodesh negah midare vali be format react hastesh
    useState daraye 2 argoman migire ke: 
    1- argoman aval esm yek moteghyer ast ke meghdar avalie oun yek araye ya harchi mitune bashe.
    2- dovomi esm moteghayer harchi bashe yek set ghablesh gharar midim va zamani ke mikhaim data dakhel moteghayer taghyir bokone bayad az 
    in esm argoman dovom estefade konim ta useEffect motevajeh taghyir beshe va rerender anjam bede.
  */
  const [articlesAPI, setArticlesAPI] = useState([]);

  /*
    useEffect: yek hook zamani estefade mishe ke bekhaim rerender anjam beshe. aval yekdor safhe bala miad va bade oun tamame chizhayi ke
    dakhel useEffect hast ejra mishe. dar asl bayad data dakhel useEffect bashe ta age taghyir kard be surat khodkar refresh mishe 
    va data rerender mishe. 
    useEffect daraye 2 argoman migire ke: 
    1- avalish yek function ke mishe be surat arrow function nevesh va data ya code ro inja minevisim va bad az bala oumadan avalie 
    ya be estelah Initialization page mounting surat migire ke tavasot useEffect anjam mishe.
    2- dovomi ye araye ke behet dependencies ro mige in function dar useEffect che zamani ejra beshe.
  */
  useEffect(() => {
    // API call

    // baraye anjam API call va gereftan data mishe az 'fetch' estefade kard vali mishe az ketabkhune 'axios' ham estefade kard


    // dar inja ma az useState baraye taghyir maghadir data estefade kardim va useEffect motevajeh shod ke bayad rerender bokone
    setArticlesAPI();


  }, []);

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
