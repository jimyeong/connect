import * as React from "react";
import BaseCheckFormGroup, { IBaseCheckFormGroupProps } from "../BaseCheckFormGroup/BaseCheckFormGroup";

interface IRadioGroupProps extends IBaseCheckFormGroupProps {}

class RadioGroup extends BaseCheckFormGroup<IRadioGroupProps, any> {
  public render() {
    const { props } = this;
    return (
      <label className="radio__tag" htmlFor={props.id}>
        <span className={props.name}>{props.label}</span>
        <input className="input-ctrl" id={props.id} type="radio" name={props.name} />
      </label>
    );
  }
}

export default RadioGroup;
