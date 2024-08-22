import TrimbleMaps from "@trimblemaps/trimblemaps-js";
import React, { useEffect, useState } from "react";
import "styles/routesView.css";

function CustomMap({ stops }) {
  const [map, setMap] = useState(null);
  const [currRoute, setCurrRoute] = useState(null);

  useEffect(() => {
    // Initialize the map
    TrimbleMaps.APIKey = "0D8BA43647605743A5FB4B225664EF0F";
    const tmap = new TrimbleMaps.Map({
      container: "map", // Container ID
      style: TrimbleMaps.Common.Style.TRANSPORTATION, // Map style URL
      center: [-74.006, 40.7128], // Initial map center [lng, lat]
      zoom: 12, // Initial zoom level
    });

    // Add navigation controls to the map
    tmap.addControl(new TrimbleMaps.NavigationControl());
    setMap(tmap);
  }, []);

  useEffect(() => {
    if (!map || !stops?.length) return;
    if (currRoute) currRoute.remove();
    const myRoute = new TrimbleMaps.Route({
      // routeId: "myRoute",
      stops: stops.map(
        (stop) => new TrimbleMaps.LngLat(stop["Longitude"], stop["Latitude"])
      ),
    });

    console.log(myRoute);
    myRoute.addTo(map);
    setCurrRoute(myRoute);
  }, [map, stops]);

  return (
    <div className="maps_container">
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}

export default CustomMap;
