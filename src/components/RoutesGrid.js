import React, { Component } from "react";
import CustomGrid from "./CustomGrid";
import "styles/routesView.css";

export default class RoutesGrid extends Component {
  render() {
    return (
      <div className="routes_grid">
        <div>
          <h4>Routes</h4>
        </div>
        <CustomGrid />
        <div>5 Routes</div>
      </div>
    );
  }
}
