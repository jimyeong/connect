import * as React from "react";
import { FormContainer, InputGroup, FormValidateCheck, FormLabelContainer, RadioGroup, CheckGroup, DaumMapContainer, Marker } from "../components";

class MakeGroupPage extends React.Component<any, any> {
  centerPosition = { lat: 35.7571991748379, lng: 127.53038672041988 };
  public render() {
    return (
      <div className="page make-group">
        <h3 className="page-title">그룹 만들기</h3>
        <div className="make-forms">
          <FormContainer validate={<FormValidateCheck />}>
            <InputGroup label="모임이름" name="team-name" placeholder="add team name" />
            <InputGroup label="모임소개" name="team-intro" placeholder="add introduce" />
            <FormLabelContainer label="성별제한">
              <RadioGroup id="qwed" name="gender" label="남자" />
              <RadioGroup id="asd" name="gender" label="여자" />
              <RadioGroup id="afas" name="gender" label="제한없음" />
            </FormLabelContainer>
            <FormLabelContainer label="참가비">
              <RadioGroup id="asfq" name="price" label="있음" />
              <RadioGroup id="2fadf" name="price" label="없음" />
            </FormLabelContainer>
            <InputGroup label="가격" name="team-price" placeholder="add price" number />
            <FormLabelContainer className="check-box-outer" label="관심분야">
              <CheckGroup id="as" name="interest" label="아웃도어/관광" />
              <CheckGroup id="df" name="interest" label="스포츠" />
              <CheckGroup id="i0i" name="interest" label="인문학/독서/글" />
              <CheckGroup id="vv" name="interest" label="어학" />
              <CheckGroup id="aa" name="interest" label="문화/공연" />
              <CheckGroup id="ss" name="interest" label="악기/레슨" />
              <CheckGroup id="gg" name="interest" label="공예/IT/디자인" />
              <CheckGroup id="f6f" name="interest" label="댄스/무용" />
              <CheckGroup id="dd" name="interest" label="사교/인맥" />
              <CheckGroup id="ww" name="interest" label="봉사활동" />
            </FormLabelContainer>
            {/* 여기 좀 별로인 듯 어떻게 하면,, 나중에 수정할것 */}
            <FormLabelContainer className="label-top" label="활동범위">
              <DaumMapContainer center={this.centerPosition}>
                <Marker />
              </DaumMapContainer>
            </FormLabelContainer>
            <button>제출</button>
          </FormContainer>
        </div>
      </div>
    );
  }
}

export default MakeGroupPage;
