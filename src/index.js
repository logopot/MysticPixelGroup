import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import themes from "./themes/commonTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
