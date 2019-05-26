import * as React from "react";
import BaseListItem from "../BaseListItem/BaseListItem";

interface IAvatarListItemProps {
  key: number;
  avatar: string;
  title: string;
  text: string;
}

class AvatarListItem extends BaseListItem<IAvatarListItemProps, any> {
  public render() {
    const { props } = this;
    return (
      <li key={props.key} className="team__item">
        <div className="team__inner">
          <div className="team__picture">
            <img src={props.avatar} alt="" />
          </div>
          <div className="team__desc">
            <h4 className="team__title">{props.title}</h4>
            <p className="team__introduce">{props.text}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default AvatarListItem;
