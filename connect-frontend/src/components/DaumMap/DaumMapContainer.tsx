import * as React from "react";
import { initMap } from "../../helper";
import "./DaumMapContainer.less";
const mapKey = "e37a013862528a5d77b0855c64d385ef";

class DaumMapContainer extends React.Component<any, any> {
  mapContainer: null | HTMLDivElement = null;
  map: any = undefined;
  public mapRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const { props } = this;
    initMap(mapKey).then(() => {
      this.mapContainer = this.mapRef.current;
      let options = {
        center: new daum.maps.LatLng(props.center["lat"], props.center["lng"]),
        level: 13
      };
      this.map = new daum.maps.Map(this.mapContainer, options);
      // 클릭리스너
      daum.maps.event.addListener(this.map, "click", this.props.getPosition);
      daum.maps.event.addListener(this.map, "rightclick", this.props.onFinish);
    });
  }

  public render() {
    const { props } = this;
    const propsChilren = React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, { map: this.map });
    });
    return (
      <div ref={this.mapRef} className="map-container">
        {propsChilren}
      </div>
    );
  }
}

export default DaumMapContainer;
