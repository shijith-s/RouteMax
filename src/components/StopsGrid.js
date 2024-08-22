import React, { Component } from "react";
import CustomGrid from "./CustomGrid";
import { observer } from "mobx-react";
import store from "store";

class StopsGrid extends Component {
  render() {
    const colDefs = [
      { field: "Seq" },
      { field: "Route" },
      { field: "Customer" },
      { field: "Latitude" },
      { field: "Longitude" },
      { field: "Address" },
      { field: "City" },
      { field: "State" },
      { field: "Zip" },
      { field: "Bills" },
      { field: "HU" },
      { field: "PSE" },
      { field: "Weight" },
      { field: "Delivery Window" },
      { field: "Status" },
      { field: "ETA" },
      { field: "ETD" },
      { field: "Stop Time (Mins)" },
    ];
    return (
      <div className="stops_grid">
        <div>
          <h4>Stops</h4>
        </div>

        <CustomGrid rowData={store.currStops} colDefs={colDefs} />
        <div>{store.currStops?.length || 0} Stops</div>
      </div>
    );
  }
}

export default observer(StopsGrid);
