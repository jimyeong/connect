import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpPage, MakeGroupPage, MainPage } from "./pages";
import { Header, MainVisual } from "./components";
import LocalStorage from "./storage/LocalStroage";
import "./assets/base/style.less";

class App extends React.Component<any, any> {
  public home = "/";
  public signUp = "/sign-up";
  public makeGroup = "/add-group";

  public render() {
    return (
      <>
        <Router>
          <Header path1={this.signUp} path2={this.makeGroup} />
          <MainVisual />
          <LocalStorage />
          <Switch>
            <Route exact path={this.home} render={() => <MainPage />} />
            <Route path={this.signUp} render={() => <SignUpPage />} />
            <Route path={this.makeGroup} render={() => <MakeGroupPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
