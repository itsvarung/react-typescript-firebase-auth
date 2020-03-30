import React from "react";
import HomePage from "./pages/homepage";

import { GlobalStyle } from "./styling/global";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
