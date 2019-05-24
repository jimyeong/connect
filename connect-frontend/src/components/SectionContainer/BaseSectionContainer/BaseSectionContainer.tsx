import * as React from "react";
import "../sectionContainer.less";

interface IBaseSectionContainerProps {
  className?: string;
  title: string;
}

abstract class BaseSectionContainer extends React.Component<IBaseSectionContainerProps, any> {
  public abstract renderFooter(): JSX.Element;
  public abstract renderHeader(): JSX.Element;

  public render() {
    const { props } = this;

    return (
      <section className={props.className ? `section-container ${props.className}` : "section-container"}>
        <div className="section-header">
          <h3 className="main-title">{this.props.title}</h3>
          {this.renderHeader()}
        </div>
        <div className="section-body clearfix">{props.children}</div>
        <div className="section-footer">{this.renderFooter()}</div>
      </section>
    );
  }
}

export default BaseSectionContainer;
