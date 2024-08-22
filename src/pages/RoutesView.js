import RoutesGrid from "components/RoutesGrid";
import RoutesMap from "components/RoutesMap";
import StopsGrid from "components/StopsGrid";
import "styles/routesView.css";
import { observer } from "mobx-react";
import store from "store";

import React, { Component } from "react";

class RoutesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      stops: [],
      currRoute: null,
      currStops: [],
    };
  }

  componentDidMount() {
    store.populateRouteAndStopsData();
  }

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
