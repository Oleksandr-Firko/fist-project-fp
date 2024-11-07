import "./myButton.css";

function MyButton({ name,type }) {
  return <button type={type}>{name}</button>;
}

export default MyButton;
