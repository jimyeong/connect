import * as React from "react";

interface InputCheckBoxProps {
  name: string;
  onChange(e: React.FormEvent): void;
  id: string;
  label: string;
}

class InputCheckBox extends React.Component<InputCheckBoxProps, any> {
  public render() {
    return (
      <div className="input-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input id={this.props.id} type="checkbox" className="input-ctrl" name={this.props.name} onChange={e => this.props.onChange(e)} />
      </div>
    );
  }
}

export default InputCheckBox;
