import * as React from "react";
import "./SearchBar.less";

interface ISearchBarProps {}
interface ISearchBarState {}

const filterItems: string[] = ["책/독서", "문화/공연", "스포츠", "음약/악기", "디자인/IT/공예", "어학", "취업", "봉사활동", "댄스/무용", "사교/인맥"];
class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  public render() {
    return (
      <div className="search__inner">
        <div className="search__form-group">
          <div className="search__filter">
            {filterItems.map((item: string, i: number) => {
              return (
                <span key={i} className="filter__item">
                  {item}
                </span>
              );
            })}
          </div>
          <input className="input-ctrl" type="text" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
