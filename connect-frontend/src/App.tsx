import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/base/style.less";
import { SignUpPage, MakeGroupPage } from "./pages";
import { Navigation } from "./components";

class App extends React.Component<any, any> {
  public signUp = "/sign-up";
  public makeGroup = "/add-group";
  public render() {
    return (
      <>
        <Router>
          <Navigation path1={this.signUp} path2={this.makeGroup} />
          <Switch>
            <Route path={this.signUp} render={() => <SignUpPage />} />
            <Route path={this.makeGroup} render={() => <MakeGroupPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
