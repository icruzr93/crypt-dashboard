import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import NotFound from "./notfound/NotFound";
import List from "./list/List";
import Detail from "./detail/Detail";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/currency/:id" component={Detail} exact />

          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
