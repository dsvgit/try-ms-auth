import React, { useState } from "react";

import OneDrivePickerDemo from "./OneDrivePickerDemo";
import GraphAPIDemo from "./GraphAPIDemo";

function App() {
  const [clientId, setClientId] = useState(
    "09b331c7-5221-4605-a0ad-8c4710beae3f"
  );

  return (
    <div className="App">
      Client id
      <br />
      <input
        style={{ width: 280}}
        type="text"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
      />{" "}
      (set your clientId)
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginRight: 50, marginBottom: 50 }}>
          <OneDrivePickerDemo clientId={clientId} />
        </div>
        <div>
          <GraphAPIDemo clientId={clientId} />
        </div>
      </div>
    </div>
  );
}

export default App;
