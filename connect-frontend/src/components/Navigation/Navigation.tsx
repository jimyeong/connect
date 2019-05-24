import * as React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink activeClassName="is-active" className="nav__link" to={props.path1}>
            회원가입
          </NavLink>
          <NavLink activeClassName="is-active" className="nav__link" to={props.path2}>
            모임만들기
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navigation;
