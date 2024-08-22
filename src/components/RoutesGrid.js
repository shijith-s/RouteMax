import React, { Component } from "react";
import CustomGrid from "./CustomGrid";
import "styles/routesView.css";
import { observer } from "mobx-react";
import store from "store";

class RoutesGrid extends Component {
  render() {
    const colDefs = [
      { field: "Route" },
      { field: "Status" },
      { field: "Route Type" },
      { field: "Ttl Stops" },
      { field: "Ttl Bills" },
      { field: "PSE" },
      { field: "Weight" },
      { field: "LG" },
      { field: "APT" },
      { field: "Start Time" },
      { field: "Comments" },
    ];

    const onRowClicked = (props) => {
      let data = { ...props.data };
      console.log(data);
      store.currRoute = data;
    };

    return (
      <div className="routes_grid">
        <div>
          <h4>Routes</h4>
        </div>
        <CustomGrid
          rowData={store.routes}
          colDefs={colDefs}
          onRowClicked={onRowClicked}
        />
        <div>{store.routes?.length || 0} Routes</div>
      </div>
    );
  }
}

export default observer(RoutesGrid);
