import * as React from "react";
import { FormContainer, FormValidateCheck, DaumMapContainer, Polygon } from "../components";

class MakeGroupPage extends React.Component<any, any> {
  public isDrawing = true;
  public centerPosition = { lat: 35.7571991748379, lng: 127.53038672041988 };
  public state = {
    positions: [],
    users: []
  };
  public onSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  // 클릭위치를 좌표로 받는다.
  public getPosition = (e: any) => {
    // 좌표가공
    const latLng = e.latLng;
    const lat = latLng.getLat(latLng["ib"]);
    const lng = latLng.getLng(latLng["jb"]);
    let position = {
      lat: lat,
      lng: lng
    };
    // 재선택하는 경우
    if (!this.isDrawing) {
      this.isDrawing = true;
      this.setState({
        ...this.state,
        positions: []
      });
    }
    // 선택하는 경우
    if (this.isDrawing) {
      this.setState({
        ...this.state,
        positions: [...this.state.positions, position]
      });
    }
  };
  public onFinishSelect = () => {
    this.isDrawing = false;
  };
  public render() {
    console.log(this.state);
    return (
      <div className="page make-group">
        <h3 className="page-title">그룹 만들기</h3>
        <div className="make-forms">
          <FormContainer onSubmit={this.onSubmit} validate={<FormValidateCheck />}>
            <DaumMapContainer center={this.centerPosition} getPosition={this.getPosition} onFinish={this.onFinishSelect}>
              <Polygon path={this.state.positions} />
            </DaumMapContainer>
          </FormContainer>
        </div>
      </div>
    );
  }
}

export default MakeGroupPage;
