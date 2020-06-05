import React from "react";
import { GlobalStyle } from "./styles/global";
import Provider from "./hooks";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
};
export default App;
