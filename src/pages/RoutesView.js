import RoutesGrid from "components/RoutesGrid";
import RoutesMap from "components/RoutesMap";
import StopsGrid from "components/StopsGrid";
import React from "react";
import "styles/routesView.css";

function RoutesView() {
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

export default RoutesView;
