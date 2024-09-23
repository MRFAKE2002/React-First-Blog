import style from './Input.module.css';

function Input(props) {
  console.log(props);
  /*
    '
    handleChange: event => {…}
      length: 1
      name: "changeInputValue"
      arguments: (...)
      caller: (...)
      [[FunctionLocation]]: CreateArticle.jsx:30
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[4]
    label: "عنوان"
    name: "title"
    type: "text"
    '
  */
  
  return (
    <div className={style.inputForm}>
      <label>{props.label}</label>
      <input type={props.type} name={props.name} onChange={props.handleChange} />
    </div>
  );
}

export default Input;