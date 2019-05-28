import * as React from "react";
import { InputGroup, FormValidateCheck, FormLabelContainer, RadioGroup, CheckGroup, DaumMapContainer } from "../../";

// 이벤트타입정의
namespace SyntheticEvent {
  export const enum EventType {
    TYPE_TEXT = "TYPE_TEXT",
    TYPE_RADIO = "TYPE_RADIO",
    TYPE_CHECKBOX = "TYPE_CHECKBOX"
  }
}

// 프롭스정의
interface IFormContainerProps {
  children: ChildTypes;
  validate: React.ReactElement<FormValidateCheck>;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}
type ChildTypes = React.ReactElement<DaumMapContainer>;

const formData = {
  gender: [
    { id: "qwed", name: "gender", label: "남자" },
    { id: "asd", name: "gender", label: "여자" },
    { id: "afas", name: "gender", label: "제한없음" }
  ],
  fee: [{ id: "asfq", name: "fee", label: "있음" }, { id: "2fadf", name: "fee", label: "없음" }],
  interest: [
    { id: "as", name: "interest", label: "아웃도어/관광" },
    { id: "df", name: "interest", label: "스포츠" },
    { id: "i0i", name: "interest", label: "인문학/독서/글" },
    { id: "vv", name: "interest", label: "어학" },
    { id: "aa", name: "interest", label: "문화/공연" },
    { id: "ss", name: "interest", label: "악기/레슨" },
    { id: "gg", name: "interest", label: "공예/IT/디자인" },
    { id: "f6f", name: "interest", label: "댄스/무용" },
    { id: "dd", name: "interest", label: "사교/인맥" },
    { id: "ww", name: "interest", label: "봉사활동" }
  ]
};

class FormContainer extends React.Component<IFormContainerProps, any> {
  state = {
    teamName: "",
    teamIntro: ""
  };
  public onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  public render() {
    const { props } = this;
    return (
      <form onSubmit={this.props.onSubmit} className="form-container">
        <InputGroup label="모임이름" name="teamName" placeholder="add team name" />
        <InputGroup label="모임소개" name="teamIntro" placeholder="add introduce" />
        <FormLabelContainer label="성별제한">
          {formData.gender.map((item, i) => {
            return <RadioGroup key={i} id={item.id} name={item.name} label={item.label} />;
          })}
        </FormLabelContainer>
        <FormLabelContainer label="참가비">
          {formData.fee.map((item, i) => {
            return <RadioGroup key={i} id={item.id} name={item.name} label={item.label} />;
          })}
        </FormLabelContainer>
        <InputGroup label="가격" name="teamPrice" placeholder="add price" number />
        <FormLabelContainer className="check-box-outer" label="관심분야">
          {formData.interest.map((item, i) => {
            return <CheckGroup key={i} id={item.id} name={item.name} label={item.label} />;
          })}
        </FormLabelContainer>
        {/* 여기 좀 별로인 듯 어떻게 하면,, 나중에 수정할것 */}
        <FormLabelContainer className="label-top" label="활동범위">
          {props.children}
        </FormLabelContainer>
        <button>제출</button>
      </form>
    );
  }
}

export default FormContainer;
export { SyntheticEvent };
