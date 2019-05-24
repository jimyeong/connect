import * as React from "react";
import { BaseSectionContainer, Btn } from "../../index";

class NormalSectionContainer extends BaseSectionContainer {
  public renderHeader() {
    return <div>없다면?</div>;
  }
  public renderFooter() {
    return <Btn className="color-main" btnName="지도보기" />;
  }
}

export default NormalSectionContainer;
