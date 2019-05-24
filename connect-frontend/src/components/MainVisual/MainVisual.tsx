import * as React from "react";
import "./mainVisual.less";

class MainVisual extends React.Component<any, any> {
  public render() {
    return (
      <section className="main-visual clearfix">
        <div className="column__left">
          <div className="main-visual__img main-bg1" />
        </div>
        <div className="column__left clearfix">
          <div className="column__left">
            <div className="main-visual__img main-bg2" />
            <div className="main-visual__img main-bg3" />
          </div>
          <div className="column__left">
            <div className="main-visual__img main-bg4" />
          </div>
        </div>
        <div className="main-visual__dim" />
      </section>
    );
  }
}

export default MainVisual;
