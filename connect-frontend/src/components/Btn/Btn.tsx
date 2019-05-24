import * as React from "react";
import "./Btn.less";

interface IBtnProps {
  btnName: string;
  className?: string;
}

class Btn extends React.Component<IBtnProps, any> {
  public render() {
    const { props } = this;
    return <button className={props.className ? `btn ${props.className}` : "btn"}>{props.btnName}</button>;
  }
}

export default Btn;
