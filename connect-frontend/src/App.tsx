import * as React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./assets/base/style.less";
import { SignUpPage, MakeGroupPage } from "./pages";
import { Navigation } from "./components";
const signUp = "/sign-up";
const makeGroup = "/add-group";

class App extends React.Component<any, any> {
  public render() {
    return (
      <>
        <Router>
          <Navigation path1={signUp} path2={makeGroup} />
          <Switch>
            <Route path={signUp} render={() => <SignUpPage />} />
            <Route path={makeGroup} render={() => <MakeGroupPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
