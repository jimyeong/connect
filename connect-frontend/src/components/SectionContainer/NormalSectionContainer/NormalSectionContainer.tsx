import * as React from "react";
import { BaseSectionContainer, Btn, IBaseSectionContainerProps } from "../../index";

interface INormalSectionContainerProps extends IBaseSectionContainerProps {}

class NormalSectionContainer extends BaseSectionContainer<INormalSectionContainerProps, any> {
  state = {
    btnMode: false
  };
  public renderSearchHeader() {
    const { props } = this;
    return (
      <div className="search__outer">
        <span className="search-copy">없다면? </span> {props.header} <Btn className="btn color-main search-btn" btnName="검색" />
      </div>
    );
  }
  public renderFooter() {
    const { state } = this;
    return (
      <Btn
        onClick={() => {
          this.setState({ ...this.state, btnMode: !this.state.btnMode });
        }}
        className="color-main"
        btnName={state.btnMode ? "리스트로 보기" : "지도로 보기"}
      />
    );
  }
}

export default NormalSectionContainer;
