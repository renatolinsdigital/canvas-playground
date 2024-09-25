import "./Text.scss";
import classNames from "classnames";
import TextProps from "./Text.model";

function Text({
  children,
  className = "",
  tag: Tag = "span",
  fontSizeName = "text-default",
  fontWeight = "font-text-regular",
  lineHeightName = "leading-default",
}: TextProps) {
  const classes = classNames(
    "text",
    className,
    fontWeight,
    fontSizeName,
    lineHeightName
  );

  return <Tag className={classes}>{children}</Tag>;
}

export default Text;
