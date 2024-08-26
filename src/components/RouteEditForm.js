import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { observer } from "mobx-react";
import React, { Component } from "react";
import Select from "react-select";
import "styles/routeEditForm.css";
import store from "store";

class RouteEditForm extends Component {
  constructor(props) {
    super(props);
    let data = props.currData;
    this.state = {
      Route: data["Route"] || "",
      Status: data["Status"] || "",
      ["Route Type"]:
        {
          value: data["Route Type"],
          label: data["Route Type"],
        } || null,
      prevRoute: data["Route"],
    };
  }

  handleChange = (field, value) => {
    this.setState((state) => ({
      ...state,
      [field]: value,
    }));
  };

  handleCancel = () => {
    this.props.handleClose();
  };
  handleSave = () => {
    let data = this.state;
    if (!data["Route"] || !data["Status"] || !data["Route Type"]) {
      alert("Please input all fields");
      return;
    }
    let routes = store.routes.map((route) => {
      if (route["Route"] == data["prevRoute"]) {
        route["Route"] = data["Route"];
        route["Status"] = data["Status"];
        route["Route Type"] = data["Route Type"].value;
      }
      return route;
    });
    let stops = store.stops.map((stop) => {
      if (stop["Route"] == data["prevRoute"]) {
        stop["Route"] = data["Route"];
      }
      return stop;
    });

    store.routes = routes;
    store.stops = stops;

    this.props.handleClose();
  };

  options = [
    { value: "City", label: "City" },
    { value: "Trap", label: "Trap" },
  ];

  render() {
    return (
      <div className="route_edit_form">
        <div>
          <TextField
            id="routeNameInput"
            label="Route Name"
            value={this.state["Route"]}
            onChange={(e) => this.handleChange("Route", e.target.value)}
          />
          <div>
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="Status"
              name="Status"
              className="route_edit_form_radio"
              row
              value={this.state["Status"]}
              onChange={(e) => this.handleChange("Status", e.target.value)}
            >
              <FormControlLabel
                value="Locked"
                control={<Radio color="primary" />}
                label="Locked"
              />
              <FormControlLabel
                value="Unlocked"
                control={<Radio color="primary" />}
                label="Unlocked"
              />
            </RadioGroup>
          </div>
          <div>
            <FormLabel component="legend" style={{ marginBottom: "10px" }}>
              Route Type
            </FormLabel>
            <Select
              options={this.options}
              label="Route Type"
              value={this.state["Route Type"]}
              onChange={(val) => this.handleChange("Route Type", val)}
            />
          </div>
        </div>
        <div>
          <Button onClick={this.handleCancel}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={this.handleSave}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default observer(RouteEditForm);
