import * as React from "react";
import { DaumMapContainer, Polygon, clickedPosition, InputText, FormLabel } from "../../components/";
import { GenderRadioView, InterestCheckBoxView } from "../../views/";
import { formData } from "../../models";

interface IMakeGroupFormState {
  positions: clickedPosition[] | [];
  groupName: string;
  groupIntro: string;
  genderLimit: { [gender: string]: boolean };
  interest: string[];
}

class MakeGroupForm extends React.Component<any, IMakeGroupFormState> {
  public isDrawing = true;
  public centerPosition = { lat: 35.7571991748379, lng: 127.53038672041988 };
  public state: IMakeGroupFormState = {
    positions: [],
    groupName: "",
    groupIntro: "",
    genderLimit: {},
    interest: []
  };
  public onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  // 클릭위치를 좌표로 받는다.
  public getPosition = (e: any) => {
    // 좌표가공
    const latLng = e.latLng;
    const lat: number = latLng.getLat(latLng["ib"]);
    const lng: number = latLng.getLng(latLng["jb"]);
    let position: { lat: number; lng: number } = {
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

  // 폼요소
  public onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const TARGET = e.currentTarget;
    if (TARGET.type == "text" || TARGET.type == "password") {
      this.setState({
        ...this.state,
        [TARGET.name]: TARGET.value
      });
      return;
    }

    // 라디오박스 타입
    if (TARGET.type == "radio") {
      let genderLimit = {};
      genderLimit[TARGET.id] = TARGET.checked;
      this.setState({
        ...this.state,
        genderLimit
      });
      return;
    }

    // 체크박스 타입
    if (TARGET.type == "checkbox") {
      let { interest } = this.state;
      let selected = TARGET.id;

      // 체크하는 경우
      if (TARGET.checked == true) {
        interest.push(selected);
        this.setState({
          ...this.state,
          interest
        });
        return;
      }

      // 체크해제 하는 경우
      if (TARGET.checked == false) {
        let removedInterest = interest.filter(item => item != selected);
        this.setState({
          ...this.state,
          interest: removedInterest
        });
        return;
      }
    }
  };
  public render() {
    const { state } = this;
    console.log(state);
    return (
      <form action="">
        <InputText descTag={<FormLabel title="모임이름" />} onChange={this.onChangeHandler} name="groupName" value={state.groupName} />
        <InputText descTag={<FormLabel title="모임소개" />} onChange={this.onChangeHandler} name="groupIntro" value={state.groupIntro} />
        <FormLabel title="성별제한">
          <GenderRadioView data={formData} onChange={this.onChangeHandler} />
        </FormLabel>
        <FormLabel title="관심분야">
          <InterestCheckBoxView data={formData} onChange={this.onChangeHandler} />
        </FormLabel>
        <DaumMapContainer center={this.centerPosition} getPosition={this.getPosition} onFinish={this.onFinishSelect}>
          <Polygon path={this.state.positions} />
        </DaumMapContainer>
        <button type="submit">확인</button>
      </form>
    );
  }
}

export default MakeGroupForm;
