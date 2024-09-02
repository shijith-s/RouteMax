import React, { Component } from "react";
import CustomGrid from "./CustomGrid";
import { observer } from "mobx-react";
import store from "store";
import SearchInput from "./SearchInput";

class StopsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickFilterText: "",
    };
  }

  onRowClicked = (props) => {
    let data = { ...props.data };
    store.updateCurrStop(data);
  };

  handleQuickFilterTextChange = (val) => {
    this.setState((state) => ({
      ...state,
      quickFilterText: val,
    }));
  };

  colDefs = [
    { field: "Seq" },
    { field: "Route" },
    { field: "Customer", filter: true },
    { field: "Latitude" },
    { field: "Longitude" },
    { field: "Address" },
    { field: "City", filter: true },
    { field: "State", filter: true },
    { field: "Zip", filter: true },
    { field: "Bills" },
    { field: "HU" },
    { field: "PSE" },
    { field: "Weight" },
    { field: "Delivery Window" },
    { field: "Status", filter: true },
    { field: "ETA" },
    { field: "ETD" },
    { field: "Stop Time (Mins)" },
  ];

  render() {
    return (
      <div className="stops_grid">
        <div>
          <h4>Stops</h4>
          <SearchInput
            value={this.state.quickFilterText}
            onChange={this.handleQuickFilterTextChange}
          />
        </div>

        <CustomGrid
          rowData={store.currStops}
          colDefs={this.colDefs}
          onRowClicked={this.onRowClicked}
          quickFilterText={this.state.quickFilterText}
        />
        <div>{store.currStops?.length || 0} Stops</div>
      </div>
    );
  }
}

export default observer(StopsGrid);
