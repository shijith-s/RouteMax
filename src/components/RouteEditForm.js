import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
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
      route: data["Route"] || "",
      status: data["Status"] || "",
      routeType:
        {
          value: data["Route Type"],
          label: data["Route Type"],
        } || null,
      prevRoute: data["Route"],
    };
  }

  handleChange = (field) => (e) => {
    let value = field == "routeType" ? e : e.target.value;
    this.setState((state) => ({
      ...state,
      [field]: value,
    }));
  };

  handleSave = () => {
    let data = this.state;
    if (!data.route || !data.status || !data.routeType) {
      alert("Please input all fields");
      return;
    }
    let routes = store.routes.map((route) => {
      if (route["Route"] == data.prevRoute) {
        route["Route"] = data.route;
        route["Status"] = data.status;
        route["Route Type"] = data.routeType.value;
      }
      return route;
    });
    let stops = store.stops.map((stop) => {
      if (stop["Route"] == data.prevRoute) {
        stop["Route"] = data.route;
      }
      return stop;
    });

    store.updateRouteAndStopsData(routes, stops);

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
            value={this.state.route}
            onChange={this.handleChange("route")}
          />
          <div>
            <FormLabel component="legend">
              <Typography>Status</Typography>
            </FormLabel>
            <RadioGroup
              aria-label="Status"
              name="Status"
              className="route_edit_form_radio"
              row
              value={this.state.status}
              onChange={this.handleChange("status")}
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
              <Typography>Route Type</Typography>
            </FormLabel>
            <Select
              options={this.options}
              label="Route Type"
              value={this.state.routeType}
              onChange={this.handleChange("routeType")}
            />
          </div>
        </div>
        <div>
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={this.handleSave}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default observer(RouteEditForm);
