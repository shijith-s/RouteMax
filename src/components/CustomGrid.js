import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function CustomGrid({ rowData, colDefs, onRowClicked }) {
  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "100%" }}
      //   style={{ height: 500, overflow: "auto" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        onRowClicked={onRowClicked}
        rowData={rowData}
        columnDefs={colDefs}
        style={{ width: 500, height: 200 }}
      />
    </div>
  );
}

export default CustomGrid;
