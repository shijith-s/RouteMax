import { observable, action, decorate, computed } from "mobx";

class Store {
  routes = [];
  stops = [];
  currRoute = null;
  currStop = null;

  get currStops() {
    if (!this.stops?.length || !this.currRoute) return [];

    let filteredStops = this.stops.filter(
      (stop) => stop["Route"] == this.currRoute["Route"]
    );
    filteredStops.sort((a, b) => (a["Seq"] > b["Seq"] ? 1 : -1));
    return filteredStops;
  }

  //   Actions goes here
  updateRouteAndStopsData(routesData, stopsData) {
    if (routesData?.length) {
      this.routes = routesData;
      this.currRoute = routesData[0];
    }

    if (stopsData?.length) {
      this.stops = stopsData;
    }
  }

  updateCurrRoute(route) {
    store.currRoute = route;
  }

  updateCurrStop(stop) {
    store.currStop = stop;
  }
}

decorate(Store, {
  routes: observable,
  stops: observable,
  currRoute: observable,
  currStop: observable,
  currStops: computed,
  updateRouteAndStopsData: action,
  updateCurrRoute: action,
  updateCurrStop: action,
});

const store = new Store();
export default store;
