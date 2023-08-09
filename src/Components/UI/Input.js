import classes from "./Input.module.css";

function Input({
  placeholder,
  type = "text",
  id,
  onChange,
  value,
  errorText = "Wrong",
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
      ></input>
      <label htmlFor={id}></label>
      <p className={classes.errorText}>{errorText}</p>
    </div>
  );
}

export default Input;
