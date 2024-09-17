// css
import style from "./Navbar.module.css";

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
    <div className= {style.headerWrapper}>
      <div className="container">
        <div className={style.header}>
          <h3> {props.title} </h3>
          <ul>
            <li>لیست مقالات</li>
            <li>ساخت مقاله جدید</li>
            <li>درباره ما</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
