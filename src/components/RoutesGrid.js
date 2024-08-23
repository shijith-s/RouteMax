import React, { Component } from "react";
import CustomGrid from "./CustomGrid";
import "styles/routesView.css";
import { observer } from "mobx-react";
import store from "store";
import StatusRenderer from "./StatusRenderer";
import RouteEditModal from "./RouteEditModal";

class RoutesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { editModalOpen: false, currRowData: null };
  }

  editRowCells = (params) => {
    this.setState({ editModalOpen: true, currRowData: params.data });
  };
  handleClose = () => {
    this.setState({ editModalOpen: false, currRowData: null });
  };

  onRowClicked = (props) => {
    let data = { ...props.data };
    store.currRoute = data;
  };

  colDefs = [
    { field: "Route" },
    {
      field: "Status",
      cellRenderer: StatusRenderer,
    },
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

  render() {
    return (
      <div className="routes_grid">
        <div>
          <h4>Routes</h4>
        </div>
        <CustomGrid
          rowData={store.routes}
          colDefs={this.colDefs}
          onRowClicked={this.onRowClicked}
          onRowDoubleClicked={this.editRowCells}
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
