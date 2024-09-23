// css
import style from "./SinglePage.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/loading/Spinner";

// image
import articleImage from "../../components/assets/images/articleImage.png";

// libraries
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePage(props) {
  /*
    useParams: hook marbut be react-router-dom hast ke be shoma in emkan ro mide parametr hayi ke dar url hastand mesle article id
    ghabel dastres bashe ke dar inja ma mitunim data har article ro mitunim bar az tarigh id begirim.
  */
  const params = useParams();

  /*
  console.log(params);
  '
  {articleId: '1'}
    articleId: "1"
    [[Prototype]]: Object
  '
  */

  /*
    dar inja baraye inke bare aval ke safhe be surat initialization surat migire pas bayad meghdar avalie bedim ke chon 
    data API mikhaim dakhelesh berizim baraye bare aval az '[]' estefade mikonim
  */
  const [articleInfo, setArticleInfo] = useState([]);

  /*
    dar inja baraye inke ma betunim loading page ro zamani ke API call mishe baraye zamani ke data dir miad ya server ya internet konde 
    bayad loading estefade konim pas 2 halat dare inke data reside ya data nareside ke dar default data vojud nadare va safhe Initialization 
    surat migire pas meghdar avaliye ro 'false' mizarim:
    1- halat aval mounting surat migire va mohtaviat dakhel useEffect ke API call hast etefagh miofte pas inja bayad ghabl az gereftan 
    data meghdar 'isLoading' true beshe.
    2- halat dovom zamani ke data gerefte shod dige bayad safhe neshun dade beshe pas 'isLoading' false mishe dobare. 
  */
  const [isLoading, setIsLoading] = useState(false);

  // dar inja bayad API call surat begire ta ma betunim data har article ro begirim va estefade konim ke in kar bayad dar useEffect bashe.
  useEffect(() => {
    setIsLoading(true);

    // alan bayad az axios vase APIc call estefade konim.
    axios
      .get(`http://localhost:8000/data/${params.articleId}`)
      .then((response) => {
        /*
          console.log(response.data);
          articleName: 
          "article1"
          author: 
          "روزبه بدلی"
          content: 
          "این یه متن راجب مقاله است"
          date: 
          "1403/09/28"
          id: 
          "1"
          imageUrl: 
          "https://k2bindia.com/wp-content/uploads/2015/08/React.png"
          readTimer: 
          "3"
        */

        /* 
          dar inja alan data har article ke az tarigh API call be ma resid dakhel 'response' pas ma baraye inke az in data betunim 
          estefade konim bayad dakhel moteghayer berizim ke in kar bayad az useState estefade konim
        */
        setArticleInfo(response.data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="روزبه شاپ" />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={style.singlePage}>
          <div className="container">
            <h1>{articleInfo.articleName}</h1>
            <div className={style.articleInfo}>
              <span>{articleInfo.date} :تاریخ انتشار مقاله</span>
              <span>{articleInfo.author} :نویسنده مقاله</span>
              <span>{articleInfo.readTimer} :مدت زمان خواندن</span>
            </div>
            <img src={articleInfo.imageUrl} alt="" />
            <p>{articleInfo.content}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default SinglePage;
