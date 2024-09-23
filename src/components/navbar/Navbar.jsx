// css
import style from "./Navbar.module.css";

// libraries
import { Link } from "react-router-dom";

function Navbar(props) {
  /* 
    zamani ke bekhaim az js estefade konim va dar html gharar bedim bayad dakhel {} bezarim 
    dar inja baraye fahmidan meghdare 'props' az 'console.log(props);' estefade kardim va dar khoruji 
    meghdar props mishe:
    
    props = {
        title: 'روزبه شاپ'
    }
  */

  return (
    <div className={style.headerWrapper}>
      <div className="container">
        <div className={style.header}>
          <h3> {props.title} </h3>
          <ul>
            <li>
              {/* 
                dar inja baraye sakht link ya safhe bandi dar react bayad az tag 'Link' estefade konim ke dar inja amalan baraye ma 
                miad tag '<a href=""></a>' misaze va dar tag 'a' ma href darim baraye vared kardan url ke mikahim berim vali dar 
                inja ma az element 'to' estefade mikonim va daghighan hamun url ke be onvan 'path' dar tag 'Route' dar App.jsx
                dadim bayad dade behse
              */}
              <Link to="/">لیست مقالات</Link>
            </li>
            <li>
              <Link to="/create-article"> ساخت مقاله جدید </Link>
            </li>
            <li>
              <Link to="/about-us">درباره ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
