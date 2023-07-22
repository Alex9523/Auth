export const renderClass = (renderType: "button" | "link" | "arrow-link" | "icon" | "burger" | "simpleLink") => {
  switch (renderType) {
    case "button":
      return "btn";

    case "link":
      return "btn-link";

    case "arrow-link":
      return "btn-arrow-link";

    case "icon":
      return "btn-icon";

    case "burger":
      return "btn-burger";

    case "simpleLink":
      return "simpleLink";

    default:
      return "btn";
  }
};

export const colorClass = (buttonColor: "primary" | "secondary" | "dark" | "primary-inverted") => {
  switch (buttonColor) {
    case "primary":
      return "btn-primary";

    case "primary-inverted":
      return "btn-primary-inverted";
    
    case "secondary":
      return "btn-secondary";

    case "dark":
      return "btn-dark";

    default:
      return null;
  }
};