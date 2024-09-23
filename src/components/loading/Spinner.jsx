import style from "./Spinner.module.css";

function Spinner(params) {
  return (
    <div className={style.loading}>
      <div className={style.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
