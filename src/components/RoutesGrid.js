import React, { Component } from "react";
import CustomGrid from "./CustomGrid";
import "styles/routesView.css";
import { observer } from "mobx-react";
import store from "store";
import StatusRenderer from "./StatusRenderer";
import RouteEditModal from "./RouteEditModal";
import SearchInput from "./SearchInput";
import SetFilter from "./customFilters/SetFilter";
import TimeFilter from "./customFilters/TimeFilter";

class RoutesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalOpen: false,
      currRowData: null,
      quickFilterText: "",
    };
  }

  editRowCells = (params) => {
    this.setState({ editModalOpen: true, currRowData: params.data });
  };
  handleClose = () => {
    this.setState({ editModalOpen: false, currRowData: null });
  };

  onRowClicked = (props) => {
    let data = { ...props.data };
    store.updateCurrRoute(data);
  };

  handleQuickFilterTextChange = (val) => {
    this.setState((state) => ({
      quickFilterText: val,
    }));
  };

  colDefs = [
    { field: "Route", filter: true },
    {
      field: "Status",
      cellRenderer: StatusRenderer,
      filter: SetFilter,
    },
    { field: "Route Type", filter: SetFilter },
    { field: "Ttl Stops" },
    { field: "Ttl Bills" },
    { field: "PSE" },
    { field: "Weight" },
    { field: "LG" },
    { field: "APT" },
    { field: "Start Time", filter: TimeFilter },
    { field: "Comments" },
  ];

  render() {
    return (
      <div className="routes_grid">
        <div>
          <h4>Routes</h4>
          <SearchInput
            value={this.state.quickFilterText}
            onChange={this.handleQuickFilterTextChange}
          />
        </div>
        <CustomGrid
          rowData={store.routes}
          colDefs={this.colDefs}
          onRowClicked={this.onRowClicked}
          onRowDoubleClicked={this.editRowCells}
          quickFilterText={this.state.quickFilterText}
        />
        <div>{store.routes?.length || 0} Routes</div>
        <RouteEditModal
          open={this.state.editModalOpen}
          handleClose={this.handleClose}
          currData={this.state.currRowData}
        />
      </div>
    );
  }
}

export default observer(RoutesGrid);
