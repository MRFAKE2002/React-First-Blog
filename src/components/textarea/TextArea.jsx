import style from './TextArea.module.css';

function TextArea(props) {
  /*
    console.log(props);
    '
    handleChange: event => {…}
      length: 1
      name: "changeInputValue"
      arguments: (...)
      caller: (...)
      [[FunctionLocation]]: CreateArticle.jsx:30
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[4]
    label: "متن"
    name: "content"
    type: "text"
    '
  */

  return (
    <div className={style.textAreaForm}>
      <label>{props.label}</label>
      <textarea type={props.type} name={props.name} onChange={props.handleChange} />
    </div>
  );
}

export default TextArea;