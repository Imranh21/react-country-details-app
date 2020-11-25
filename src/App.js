import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Nav from "./componetns/main/Nav";
import Router from "./componetns/main/Router";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </div>
  );
}
