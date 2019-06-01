import * as React from "react";
interface IInputTextProps {
  onChange(e: React.FormEvent): void;
  name: string;
  value: string;
  descTag: any;
}

class InputText extends React.Component<IInputTextProps, any> {
  public render() {
    const { props } = this;
    return (
      <div className="input-group">
        {props.descTag}
        <input type="text" className="input-ctrl" name={props.name} value={props.value} onChange={e => props.onChange(e)} />
      </div>
    );
  }
}

export default InputText;
