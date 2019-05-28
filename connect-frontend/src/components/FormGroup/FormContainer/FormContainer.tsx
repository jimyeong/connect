import * as React from "react";
import { FormValidateCheck, InputGroup } from "../../index";

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
  children: ChildTypes[];
  validate: React.ReactElement<FormValidateCheck>;
}
type ChildTypes = React.ReactElement<InputGroup> & JSX.Element;

class FormContainer extends React.Component<IFormContainerProps, any> {
  state = {};
  public render() {
    const { props } = this;
    console.log(this.props.children);
    // 새로운 프롭스
    const propsChild = React.Children.map(this.props.children, (child: ChildTypes) => {
      if (child.type != "button") {
        return React.cloneElement(child, { validate: props.validate });
      } else {
        return child;
      }
    });
    return <div className="form-container">{propsChild}</div>;
  }
}

export default FormContainer;
export { SyntheticEvent };
