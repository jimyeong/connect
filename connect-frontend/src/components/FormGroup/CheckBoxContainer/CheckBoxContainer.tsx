import * as React from "react";

import { RadioGroup } from "../..";

interface ICheckBoxContainerProps {
  label: string;
  children: React.ReactElement<RadioGroup>[];
}

class CheckBoxContainer extends React.Component<ICheckBoxContainerProps, any> {
  public render() {
    const { props } = this;
    return (
      <div className="radio-group">
        <div className="form-label">
          <span className="radio__label">{props.label}</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default CheckBoxContainer;
