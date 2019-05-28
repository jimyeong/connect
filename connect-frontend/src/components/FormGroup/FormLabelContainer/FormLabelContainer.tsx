import * as React from "react";

import { RadioGroup, DaumMapContainer } from "../..";

interface IRadioGroupContainerProps {
  label: string;
  children: React.ReactElement<RadioGroup>[] | React.ReactElement<DaumMapContainer>;
  className?: string;
}

class FormLabelContainer extends React.Component<IRadioGroupContainerProps, any> {
  public render() {
    const { props } = this;
    return (
      <div className={props.className ? `label-box ${props.className}` : "label-box"}>
        <div className="form-label">{props.label}</div>
        {this.props.children}
      </div>
    );
  }
}

export default FormLabelContainer;
