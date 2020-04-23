import React from "react";

import OneDrivePickerDemo from "./OneDrivePickerDemo";
import GraphAPIDemo from "./GraphAPIDemo";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginRight: 50, marginBottom: 50 }}>
          <OneDrivePickerDemo />
        </div>
        <div>
          <GraphAPIDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
