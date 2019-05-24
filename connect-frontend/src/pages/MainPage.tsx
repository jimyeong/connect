import * as React from "react";
import { NormalSectionContainer, DaumMapContainer, Marker } from "../components/index";
import "./index.less";

class MainPage extends React.Component<any, any> {
  state = {
    groups: []
  };
  componentDidMount() {}
  public render() {
    return (
      <section className="page main">
        <NormalSectionContainer className="seek-section" title="도움이 될 가까운 그룹 찾기">
          <div className="column__left">
            <ul className="team__list">
              <li className="team__item">
                <div className="team__inner">
                  <div className="team__picture">avartar</div>
                  <div className="team__desc">
                    <h4 className="team__title">Lorem ipsum dolor sit amet.</h4>
                    <p className="team__introduce">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="column__right">
            <DaumMapContainer>
              <Marker />
            </DaumMapContainer>
          </div>
        </NormalSectionContainer>
      </section>
    );
  }
}

export default MainPage;
