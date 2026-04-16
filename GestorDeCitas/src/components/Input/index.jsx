import "./Input.css"

function Input({ label, type, placeholder, name, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        class ="u-full-width"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;