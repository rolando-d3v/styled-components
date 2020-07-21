import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Compo01 from "./pages/Compo01";

const Contenedor = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: #4f8a8b;
  /* height: calc(100vh - 90px); */
  height: calc(100vh - 61px);
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Contenedor>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/compo01" component={Compo01} />
          </Switch>
        </Contenedor>
      </BrowserRouter>
    </div>
  );
}

export default App;
