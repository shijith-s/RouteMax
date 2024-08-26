import React, { Component } from "react";
import CustomMap from "./CustomMap";
import { observer } from "mobx-react";
import store from "store";
import ThemeSwitcher from "./ThemeSwitcher";

class RoutesMap extends Component {
  render() {
    return (
      <div className="routes_map">
        <div>
          <h4>Routes Map</h4>
          <ThemeSwitcher />
        </div>
        <CustomMap stops={store.currStops} />
      </div>
    );
  }
}

export default observer(RoutesMap);
