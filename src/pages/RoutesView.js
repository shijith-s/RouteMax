import RoutesGrid from "components/RoutesGrid";
import RoutesMap from "components/RoutesMap";
import StopsGrid from "components/StopsGrid";
import { extractRoutesData, extractStopsData } from "data/DataManager";
import React, { useEffect } from "react";
import "styles/routesView.css";

function RoutesView() {
  useEffect(() => {
    populateData();
  }, []);

  const populateData = async () => {
    let routesData = await extractRoutesData();
    let stopsData = await extractStopsData();

    console.log(routesData);
    console.log(stopsData);
  };

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
