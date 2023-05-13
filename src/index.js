// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes";

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
