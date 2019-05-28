import * as React from "react";
import { initMap } from "../../helper";
import "./DaumMapContainer.less";
const mapKey = "e37a013862528a5d77b0855c64d385ef";

class DaumMapContainer extends React.Component<any, any> {
  mapContainer: null | HTMLDivElement = null;
  map: any = undefined;
  public mapRef = React.createRef<HTMLDivElement>();
  state = {
    positions: []
  };
  getPosition = (e: any) => {
    let position = {
      lat: e.latLng["ib"],
      lng: e.latLng["jb"]
    };
    this.setState({
      ...this.state,
      positions: [...this.state.positions, position]
    });
  };

  componentDidMount() {
    const { props } = this;
    initMap(mapKey).then(() => {
      this.mapContainer = this.mapRef.current;
      let options = {
        center: new daum.maps.LatLng(props.center["lat"], props.center["lng"]),
        level: 13
      };
      this.map = new daum.maps.Map(this.mapContainer, options);
      daum.maps.event.addListener(this.map, "click", this.getPosition);
    });
  }

  public render() {
    console.log(this.state);
    return (
      <div ref={this.mapRef} className="map-container">
        {this.props.children}
      </div>
    );
  }
}

export default DaumMapContainer;
