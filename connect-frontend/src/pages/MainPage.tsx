import * as React from "react";
import { NormalSectionContainer, DaumMapContainer, Marker, AvatarListItem, SearchBar } from "../components/index";
import { Avatar1, Avatar2, Avatar3 } from "../assets/img";
import "./index.less";

type groups = { id: number; title: string; text: string; img: string; area: [] };
interface IMainPageState {
  groups: groups[];
}
class MainPage extends React.Component<any, IMainPageState> {
  state: IMainPageState = {
    groups: [
      { id: 0, title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img: Avatar1, area: [] },
      { id: 1, title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img: Avatar2, area: [] },
      { id: 2, title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img: Avatar3, area: [] },
      { id: 3, title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img: Avatar1, area: [] },
      { id: 4, title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img: Avatar2, area: [] },
      { id: 5, title: "Lorem ipsum dolor sit amet.", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", img: Avatar2, area: [] }
    ]
  };

  componentDidMount() {}
  public render() {
    return (
      <section className="page main">
        <NormalSectionContainer header={<SearchBar />} className="seek-section" title="도움이 될 가까운 그룹 찾기">
          <div className="column__left">
            <ul className="team__list">
              {this.state.groups.map((item: groups, i: number) => {
                return <AvatarListItem key={i} avatar={item.img} title={item.title} text={item.text} />;
              })}
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
