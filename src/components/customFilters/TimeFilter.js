import { TextField } from "@material-ui/core";
import { useGridFilter } from "ag-grid-react";
import React, { useCallback } from "react";
import "styles/customFilter.css";

function TimeFilter({ model, onModelChange, getValue, column, api }) {
  const handleTimeChange = (field, value) => {
    if (
      model &&
      ((field == "from" && model["to"] && value > model["to"]) ||
        (field == "to" && model["from"] && value < model["from"]))
    ) {
      alert("Start time should be less than end time");
      return;
    }
    onModelChange({ ...model, [field]: value });
  };

  const clearFilter = () => {
    api.setColumnFilterModel(column.colId, null);
  };

  const doesFilterPass = useCallback(
    (params) => {
      const { node } = params;
      const value = getValue(node).toString();
      let from = model["from"];
      let to = model["to"];
      if ((!from || value >= from) && (!to || value <= to)) return true;
      return false;
    },
    [model]
  );

  useGridFilter({ doesFilterPass });

  return (
    <div className="container">
      <TextField
        id="time"
        label="From"
        type="time"
        value={model ? model["from"] : null}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleTimeChange("from", e.target.value)}
        // inputProps={{
        //   step: 300, // 5 min
        // }}
      />
      <TextField
        id="time"
        label="To"
        type="time"
        value={model ? model["to"] : null}
        onChange={(e) => handleTimeChange("to", e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        // inputProps={{
        //   min: model && model["from"] ? model["from"] : "00:00",
        // }}
      />
      <button onClick={clearFilter}>Clear Filter</button>
    </div>
  );
}

export default TimeFilter;
