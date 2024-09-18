// css
import style from "./Home.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/article/Article";

// hooks
import { useEffect, useState } from "react";

// libraries
import axios from "axios";
import Footer from "../../components/footer/Footer";

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

    /* 
      baraye anjam API call va gereftan data mishe az 'fetch' estefade kard vali mishe az ketabkhune 'axios' ham estefade kard
      dar 'get' url oun api ro minevisim va badesh dakhel 'then' arrow function minevisim ke data dakhel api dar yek moteghayer gharar migire va ma 
      bayad inja baraye taghyir moteghayer 'articlesAPI' bayad az useState estefade konim ta useEffect motevajeh taghyir meghdar moteghayer beshe va 
      khodesh rerender ro anjam bede va data namayesh dade beshe.
      'catch' ham baraye zamanie ke be error khordim oun moghe arrow function seda zade mishe ke migim chi kar bokone.
    */
    axios
      .get("http://localhost:8000/data")
      .then((api) => {
        /*
          dar inja baraye inke befahmim data gerefte shode tavasot axios che chizi dare az 'console.log(api);' estefade kardim 
          va khoruji:
          '
          Object
            config: 
            {transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
            data: 
            (4) [{…}, {…}, {…}, {…}]
            headers: 
            AxiosHeaders {content-length: '574', content-type: 'application/json'}
            request: 
            XMLHttpRequest {url: 'http://localhost:8000/data', onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, …}
            status: 
            200
            statusText: 
            "OK"
            [[Prototype]]: 
            Object
          '
          dar inja mifahmim data vojud dare pas ba zadan 'api.data' be list az object ke har kodum data marbut be yek article hast be ma dade mishe
        */
        // dar inja ma az useState baraye taghyir maghadir data estefade kardim va useEffect motevajeh shod ke bayad rerender bokone
        setArticlesAPI(api.data);
        /*
          alan maghdar moteghayer articlesAPI list data object articles:
          '
          0: 
          {id: '1', imageUrl: '../../components/assets/images/articleImage.png', articleName: 'article1', readTimer: '3'}
          1: 
          {id: '2', imageUrl: '../../components/assets/images/articleImage.png', articleName: 'article2', readTimer: '4'}
          2: 
          {id: '3', imageUrl: '../../components/assets/images/articleImage.png', articleName: 'article3', readTimer: '2'}
          3: 
          {id: '4', imageUrl: '../../components/assets/images/articleImage.png', articleName: 'article4', readTimer: '6'}
          length: 4
          '
        */
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.homeWrapper}>
      <Navbar title="روزبه شاپ" />
      <div className="container">
        <h2>مقالات جدید</h2>
        <div className={style.homeArticles}>
          {/* 
            dar inja baraye inke bayad dinamic baraye har yek az object darun list articlesAPI bayad component 'Article' estefade beshe
            pas ma bayad inja az 'map' estefade konim ke miad dakhel list araye halghe mizane va har yek az object darun list ra dar 
            khoruji return mikone.
            dar asl dalil asli ke az 'map' bejaye 'foreach' estefade mishe ine ke har bar dar khoruji object ro return mikone
          */}
          {articlesAPI.map( articleObject => (
            // dar inja object be surat props be component ersal mishe va baraye moshakhas budan har component bayad 'key' unique bedim.
            <Article article={articleObject} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
