import React, { Component } from "react";
import CustomGrid from "./CustomGrid";

export default class StopsGrid extends Component {
  render() {
    return (
      <div className="stops_grid">
        <div>
          <h4>Stops</h4>
        </div>

        <CustomGrid />
        <div>5 Stops</div>
      </div>
    );
  }
}
