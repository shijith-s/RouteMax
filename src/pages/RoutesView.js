import RoutesGrid from "components/RoutesGrid";
import RoutesMap from "components/RoutesMap";
import StopsGrid from "components/StopsGrid";
import "styles/routesView.css";

import React, { Component } from "react";

class RoutesView extends Component {
  // componentDidMount() {
  // console.log("populating data");
  // this.props.store.populateRouteAndStopsData();
  // }

  render() {
    return (
      <div className="routesview">
        <div className="routesview_item1">
          <RoutesGrid />
        </div>
        <div className="routesview_item2">
          <RoutesMap />
        </div>
        <div className="routesview_item3">
          <StopsGrid />
        </div>
      </div>
    );
  }
}

export default RoutesView;

// const RoutesView = () => {
//   useEffect(() => {
//     console.log("populating data");
//     store.populateRouteAndStopsData();
//   }, []);

//   console.log("store is : ", store);

//   return (
//     <div className="routesview">
//       <div className="routesview_item1">
//         <RoutesGrid />
//       </div>
//       <div className="routesview_item2">
//         <RoutesMap />
//       </div>
//       <div className="routesview_item3">
//         <StopsGrid />
//       </div>
//     </div>
//   );
// };

// export default RoutesView;
