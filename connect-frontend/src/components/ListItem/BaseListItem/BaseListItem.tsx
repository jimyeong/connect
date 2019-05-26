import * as React from "react";
interface IBaseListItemProps {}
interface IBaseListItemState {}
abstract class BaseListItem<P extends IBaseListItemProps, S extends IBaseListItemState> extends React.Component<P, S> {
  public abstract render(): JSX.Element;
}

export default BaseListItem;
