import * as React from "react";

interface IBaseCheckFormGroupProps {
  id: string;
  name: string;
  label: string;
}
interface IBaseCheckFormGroupState {}

abstract class BaseCheckFormGroup<P extends IBaseCheckFormGroupProps, S extends IBaseCheckFormGroupState> extends React.Component<P, S> {
  public abstract render(): JSX.Element;
}

export default BaseCheckFormGroup;
export { IBaseCheckFormGroupProps, IBaseCheckFormGroupState };
