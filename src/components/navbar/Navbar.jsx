import style from "./Navbar.module.css";

function Navbar(params) {
  /* 
      zamani ke bekhaim az js estefade konim va dar html gharar bedim bayad dakhel {} bezarim 
      dar inja baraye fahmidan meghdare 'params' az 'console.log(params);' estefade kardim va dar khoruji 
      meghdar params mishe:
      
      params = {
          title: 'روزبه شاپ'
      }
  */

  console.log(params);

  return (
    <div className={style.header}>
      <h3> {params.title} </h3>
      <ul>
        <li>لیست مقالات</li>
        <li>ساخت مقاله جدید</li>
        <li>درباره ما</li>
      </ul>
    </div>
  );
}

export default Navbar;
