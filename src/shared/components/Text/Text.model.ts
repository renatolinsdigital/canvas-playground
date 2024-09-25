interface TextProps {
  tag?:
    | "i"
    | "b"
    | "p"
    | "em"
    | "del"
    | "ins"
    | "code"
    | "cite"
    | "mark"
    | "abbr"
    | "span"
    | "small"
    | "strong";
  className?: string;
  children: React.ReactNode;
  fontSizeName?:
    | "text-smallest"
    | "text-smaller"
    | "text-default"
    | "text-medium"
    | "text-large"
    | "text-bigger"
    | "text-jumbo"
    | "text-biggest";
  fontWeight?: "font-text-regular" | "font-text-bold" | "font-text-semi-bold";
  lineHeightName?:
    | "leading-small"
    | "leading-default"
    | "leading-tall"
    | "leading-taller"
    | "leading-big"
    | "leading-biggest";
}

export default TextProps;
