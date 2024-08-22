import React, { Component } from "react";
import CustomMap from "./CustomMap";
import { observer } from "mobx-react";
import store from "store";

class RoutesMap extends Component {
  render() {
    return (
      <div className="routes_map">
        <h4>Routes Map</h4>
        <CustomMap stops={store.currStops} />
      </div>
    );
  }
}

export default observer(RoutesMap);
