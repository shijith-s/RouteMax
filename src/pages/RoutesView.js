import RoutesGrid from "components/RoutesGrid";
import RoutesMap from "components/RoutesMap";
import StopsGrid from "components/StopsGrid";
import "styles/routesView.css";
import { observer } from "mobx-react";
import store from "store";

import React, { Component } from "react";
import { extractRoutesData, extractStopsData } from "data/DataManager";

class RoutesView extends Component {
  componentDidMount() {
    this.populateData();
  }

  populateData = async () => {
    let routesData = await extractRoutesData();
    let stopsData = await extractStopsData();
    store.updateRouteAndStopsData(routesData, stopsData);
  };

  render() {
    return (
      <div className="routesview">
        <div className="routesview_item1">
          <RoutesGrid />
        </div>
        <div className="routesview_item2">
          <RoutesMap />
        </div>
        <div className="routesview_item3">
          <StopsGrid />
        </div>
      </div>
    );
  }
}

export default observer(RoutesView);
