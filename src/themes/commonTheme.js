export const breakpoints = {
  xs: "0",
  tiny: "375px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1440px",

  up: (size) => `@media only screen and (min-width: ${breakpoints[size]})`,
  down: (size) => `@media only screen and (max-width: ${breakpoints[size]})`,
  between: (down, up) =>
    `@media only screen and (max-width: ${breakpoints[down]}) and (min-width:${breakpoints[up]}) `,
};

const themes = {
  primaryColor: "#e57a99",
  textColor: "#F6F7F8",
  accentColor: "#20A4F3", //Celestial blue
  navBarBgColor: "#010109",
  scrollBarBGColor: "#010109",
  scrollBarBGColorThumb: "#003049",
  scrollBarBGColorThumbHover: "#415a77",
  lineColor: "#313131",
};

export default themes;
