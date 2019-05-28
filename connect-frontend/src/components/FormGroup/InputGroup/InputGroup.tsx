import * as React from "react";
import BaseFormGroup, { IBaseFormGroupProps } from "../BaseFormGroup/BaseFormGroup";
import { FormValidateCheck, SyntheticEvent } from "../../index";
import { TypeHelper } from "../../../helper";

interface IFormGroupProps extends IBaseFormGroupProps {
  className?: string;
  validate: React.ReactElement<FormValidateCheck>;
  value: string;
  number?: boolean;
}

interface IFormGroupState {
  [targetName: string]: string;
}
class InputGroup extends BaseFormGroup<TypeHelper.Omit<IFormGroupProps, "validate" | "value">, IFormGroupState> {
  state = {
    [this.props.name]: ""
  };
  onChangeHandler = (e: React.FormEvent<HTMLInputElement>, customEvent) => {
    if (customEvent == SyntheticEvent.EventType.TYPE_TEXT) {
      this.setState({
        ...this.state,
        [e.currentTarget.name]: e.currentTarget.value
      });
    }
  };
  public render() {
    console.log(this.state);
    const props: IFormGroupProps = this.props as any;
    return (
      <div className={this.props.className ? `form-group ${this.props.className}` : "form-group"}>
        <label className="form-label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          value={this.state[this.props.name]}
          onChange={(e: React.FocusEvent<HTMLInputElement>) => this.onChangeHandler(e, SyntheticEvent.EventType.TYPE_TEXT)}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          className="input-ctrl"
          type={props.number ? "number" : "text"}
        />
        {props.validate}
      </div>
    );
  }
}

export default InputGroup;
export { IFormGroupState };
