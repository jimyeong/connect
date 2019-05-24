import * as React from "react";
import { Navigation } from "../index";
import { Logo } from "../../assets/svg";
import { Link } from "react-router-dom";
import "./header.less";

class Header extends React.Component<any, any> {
  public render() {
    return (
      <header className="header">
        <div className="header__inner">
          <h1 className="logo">
            <Link to="/">
              <Logo className="logo__connect" width={30} height={30} />
              <span className="logo__title">Connect</span>
            </Link>
          </h1>
          <Navigation path1={this.props.path1} path2={this.props.path2} />
        </div>
      </header>
    );
  }
}

export default Header;
