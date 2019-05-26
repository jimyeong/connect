import * as React from "react";
import { BaseSectionContainer, Btn, IBaseSectionContainerProps } from "../../index";

interface INormalSectionContainerProps extends IBaseSectionContainerProps {}

class NormalSectionContainer extends BaseSectionContainer<INormalSectionContainerProps, any> {
  public renderSearchHeader() {
    const { props } = this;
    return (
      <div className="search__outer">
        <span className="search-copy">없다면? </span> {props.searchBar} <Btn className="btn color-main search-btn" btnName="검색" />
      </div>
    );
  }
  public renderHeader() {
    return <div>header</div>;
  }
  public renderFooter() {
    return <Btn className="color-main" btnName="지도보기" />;
  }
}

export default NormalSectionContainer;
