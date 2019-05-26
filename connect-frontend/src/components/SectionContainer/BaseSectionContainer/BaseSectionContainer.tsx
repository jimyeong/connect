import * as React from "react";
import "../sectionContainer.less";
import SearchBar from "../../SearchBar/SearchBar";

interface IBaseSectionContainerProps {
  className?: string;
  title: string;
  searchBar?: React.ReactElement<SearchBar>;
}
abstract class BaseSectionContainer<P extends IBaseSectionContainerProps, S> extends React.Component<P, S> {
  public abstract renderSearchHeader(): JSX.Element;
  public abstract renderFooter(): JSX.Element;
  public abstract renderHeader(): JSX.Element;

  public render() {
    const { props } = this;

    return (
      <section className={props.className ? `section-container ${props.className}` : "section-container"}>
        <div className="section-header">
          <h3 className="main-title">{this.props.title}</h3>
          {props.searchBar ? this.renderSearchHeader() : this.renderHeader()}
        </div>
        <div className="section-body clearfix">{props.children}</div>
        <div className="section-footer">{this.renderFooter()}</div>
      </section>
    );
  }
}

export default BaseSectionContainer;
export { IBaseSectionContainerProps };
