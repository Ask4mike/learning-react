import styles from "./Button.module.css";

console.log(styles);
function Button({
  label = "default",
  id,
  item,
  whenButtonisClicked: whenisClicked,
  children,
}) {
  // const label = props.label ?? "default";
  // const id = props.id;
  // const item = props.item;
  // const whenButtonisClicked = props.whenButtonisClicked;

  // use a conditional statement to make use of props that are optional and will be used by a certain component.
  if (whenisClicked) {
    whenisClicked();
  }

  return (
    <button className={`${styles["click_button"]} cursor`}>
      {label}
      {/* {children} */}
    </button>
  );
}

export default Button;
