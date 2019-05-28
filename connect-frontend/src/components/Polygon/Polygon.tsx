import * as React from "react";

class Polygon extends React.Component<any, any> {
  poligonPath;
  polygon;

  componentDidUpdate() {
    const { props } = this;
    // 맵객체가 비동기적으로 생성되기 때문에 보장해주기 위해서
    if (props.map) {
      // 폴리곤이 있는 경우
      if (this.polygon) {
        this.polygon.setMap(null);
        this.poligonPath = null;
      }
      this.poligonPath = props.path.map(item => {
        return new daum.maps.LatLng(item.lat, item.lng);
      });
      console.log("this.poligonPath", this.poligonPath);
      // 지도에 표시할 다각형을 생성합니다
      this.polygon = new daum.maps.Polygon({
        path: this.poligonPath, // 그려질 다각형의 좌표 배열입니다
        strokeWeight: 3, // 선의 두께입니다
        strokeColor: "#39DE2A", // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "longdash", // 선의 스타일입니다
        fillColor: "#A2FF99", // 채우기 색깔입니다
        fillOpacity: 0.7 // 채우기 불투명도 입니다
      });
      // 지도에 다각형을 표시합니다
      this.polygon.setMap(this.props.map);
    }
  }

  public render() {
    return null;
  }
}

export default Polygon;
