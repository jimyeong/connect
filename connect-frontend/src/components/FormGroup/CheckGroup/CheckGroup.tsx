import * as React from "react";
import BaseCheckGroup, { IBaseCheckFormGroupProps } from "../BaseCheckFormGroup/BaseCheckFormGroup";

interface ICheckGroupProps extends IBaseCheckFormGroupProps {}

class CheckGroup extends BaseCheckGroup<ICheckGroupProps, any> {
  public render() {
    const { props } = this;
    return (
      <label className="check__tag" htmlFor={props.id}>
        <span className={props.name}>{props.label}</span>
        <input className="input-ctrl" id={props.id} type="checkbox" name={props.name} />
      </label>
    );
  }
}

export default CheckGroup;
