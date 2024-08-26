import {
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { useGridFilter } from "ag-grid-react";
import React, { useCallback, useEffect, useState } from "react";
import "styles/customFilter.css";

function SetFilter({ onModelChange, column, getValue, api }) {
  const [uniqueValues, setUniqueValues] = useState({});

  useEffect(() => {
    let setValues = new Set();
    api.forEachNode((node) => {
      setValues.add(node.data[column.colId]);
    });
    let values = {};
    Array.from(setValues).forEach((val) => {
      values[val] = true;
    });
    setUniqueValues(values);
  }, []);

  useEffect(() => {
    onModelChange("");
    let allTrue = true;
    Object.keys(uniqueValues).forEach((key) => {
      allTrue = allTrue & uniqueValues[key];
    });
    if (allTrue) {
      api.setColumnFilterModel(column.colId, null);
    }
  }, [uniqueValues]);

  const handleSelection = (value, checked) => {
    setUniqueValues((values) => ({ ...values, [value]: checked }));
  };

  const selectOrUnselectAll = (flag) => {
    let values = { ...uniqueValues };
    Object.keys(uniqueValues).forEach((key) => {
      values[key] = flag;
    });
    setUniqueValues(values);
  };

  const doesFilterPass = useCallback(
    (params) => {
      const { node } = params;
      const value = getValue(node).toString();
      return uniqueValues[value];
    },
    [uniqueValues]
  );

  useGridFilter({ doesFilterPass });

  return (
    <div className="container">
      <h4>Select Values</h4>
      <FormGroup col>
        {Object.keys(uniqueValues).map((value, key) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={uniqueValues[value]}
                onChange={(_, checked) => handleSelection(value, checked)}
                name={value}
                color="primary"
              />
            }
            label={value}
          />
        ))}
      </FormGroup>
      <button onClick={() => selectOrUnselectAll(true)}>Select All</button>
      <button onClick={() => selectOrUnselectAll(false)}>Unselect All</button>
    </div>
  );
}

export default SetFilter;
