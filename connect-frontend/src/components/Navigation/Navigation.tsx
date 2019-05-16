import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../../assets/svg";
import "./navigation.less";

interface INavigationProps {
  path1: string;
  path2: string;
}

class Navigation extends React.Component<INavigationProps, any> {
  public render() {
    const { props } = this;
    return (
      <nav className="nav">
        <div className="nav__outer">
          <h1 className="logo">
            <Link to="/">
              <Logo className="logo__connect" width={30} height={30} />
            </Link>
          </h1>
          <div className="nav__inner">
            <NavLink activeClassName="is-active" className="nav__link" to={props.path1}>
              회원가입
            </NavLink>
            <NavLink activeClassName="is-active" className="nav__link" to={props.path2}>
              모임만들기
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
