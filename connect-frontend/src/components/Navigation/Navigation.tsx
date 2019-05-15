import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navigation.less";
import { Logo } from "../../assets/svg";

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
              <img src={`${Logo}`} alt="" />
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
