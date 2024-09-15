import style from "./Navbar.module.css";

function Navbar(params) {
    return (
        <div className={style.header}>
            <ul>
                <li>لیست مقالات</li>
                <li>ساخت مقاله جدید</li>
                <li>درباره ما</li>
            </ul>
        </div>
    )
}

export default Navbar;