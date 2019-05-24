import * as React from "react";
import { initMap } from "../../helper";
import "./DaumMapContainer.less";
const mapKey = "e37a013862528a5d77b0855c64d385ef";

class DaumMapContainer extends React.Component<any, any> {
  mapContainer: null | HTMLDivElement = null;
  map: any = undefined;
  public mapRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    initMap(mapKey).then(() => {
      this.mapContainer = this.mapRef.current;
      let options = {
        center: new daum.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      this.map = new daum.maps.Map(this.mapContainer, options);
    });
  }

  public render() {
    return (
      <div ref={this.mapRef} className="map-container">
        {this.props.children}
      </div>
    );
  }
}

export default DaumMapContainer;
