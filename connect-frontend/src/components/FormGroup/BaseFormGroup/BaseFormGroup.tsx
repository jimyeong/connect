import * as React from "react";
import "../FormGroup.less";

interface IBaseFormGroupProps {
  placeholder?: string;
  name: string;
  label: string;
}

interface IBaseFormGroupState {}
abstract class BaseFormGroup<P extends IBaseFormGroupProps, S extends IBaseFormGroupState> extends React.Component<P, S> {
  public abstract render(): JSX.Element;
}

export default BaseFormGroup;
export { IBaseFormGroupProps };
