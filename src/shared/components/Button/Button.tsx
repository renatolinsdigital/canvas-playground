import "./Button.scss";
import classNames from "classnames";
import ButtonProps from "./Button.model";

function Button({
  onClick,
  children,
  onMouseDown,
  className = "",
  isLoading = false,
  coloring = "coloring-default",
}: ButtonProps) {
  const handleClick = () => {
    if (!isLoading) onClick?.();
  };

  const handleMouseDown = () => {
    onMouseDown?.();
  };

  const classes = classNames(
    "button",
    coloring,
    className,
    { "button-loading": isLoading } // Additional class when loading
  );

  return (
    <button
      className={classes}
      disabled={isLoading}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
