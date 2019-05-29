import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MakeGroupPage, MainPage, LoginPage, LoginedPage } from "./pages";
import { Header, MainVisual } from "./components";
import LocalStorage from "./storage/LocalStroage";
import "./assets/base/style.less";

class App extends React.Component<any, any> {
  public home = "/";
  public signUp = "/sign-up";
  public makeGroup = "/add-group";
  public login = "/login";
  public loginned = "/f8fs7owfeoopkr3q22dsxxrsdf";

  public render() {
    console.log('localStorage.getItem("user")', localStorage.getItem("user"));
    return (
      <>
        <Router>
          <Header path1={this.login} path2={this.makeGroup} />
          <MainVisual />
          <LocalStorage />
          <Switch>
            <Route exact path={this.home} render={() => <MainPage />} />
            <Route path={this.login} render={() => <LoginPage />} />
            <Route path={this.loginned} render={() => <LoginedPage />} />
            <Route path={this.makeGroup} render={() => <MakeGroupPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
