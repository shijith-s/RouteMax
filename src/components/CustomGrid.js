import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function CustomGrid({
  rowData,
  colDefs,
  onRowClicked,
  onRowDoubleClicked,
  rowSelection,
  quickFilterText,
}) {
  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "100%" }}
      //   style={{ height: 500, overflow: "auto" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        onRowClicked={onRowClicked}
        onRowDoubleClicked={onRowDoubleClicked}
        rowData={rowData}
        columnDefs={colDefs}
        style={{ width: 500, height: 200 }}
        rowSelection={rowSelection || "single"}
        quickFilterText={quickFilterText}
      />
    </div>
  );
}

export default CustomGrid;
