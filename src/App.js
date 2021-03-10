import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Compo01 from "./pages/Compo01";


function App() {
  return (
    <div >
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/compo01" component={Compo01} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
