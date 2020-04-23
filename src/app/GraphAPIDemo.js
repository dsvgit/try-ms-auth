import React, { useState } from "react";
import * as Msal from "msal";

import { graphConfig } from "./api/graphConfig";
import { loginRequest, msalConfig } from "./api/authConfig";
import { callMSGraph } from "./api/graph";

const userAgentApplication = new Msal.UserAgentApplication(msalConfig);

function getTokenPopup(request) {
  return userAgentApplication.acquireTokenSilent(request).catch((error) => {
    console.log(error);
    console.log("silent token acquisition fails. acquiring token using popup");

    // fallback to interaction when silent call fails
    return userAgentApplication
      .acquireTokenPopup(request)
      .then((tokenResponse) => {
        return tokenResponse;
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

async function signIn() {
  try {
    const response = await userAgentApplication.loginPopup(loginRequest);
    console.log("id_token acquired at: " + new Date().toString());
    console.log(response);

    if (userAgentApplication.getAccount()) {
      console.log(userAgentApplication.getAccount());
    }
  } catch (error) {
    console.error(error);
  }
}

async function getInfo(endpoint) {
  try {
    const { accessToken } = await getTokenPopup(loginRequest);

    const result = await callMSGraph(endpoint, accessToken);

    return result;
  } catch (error) {
    console.error(error);
    return { error: error.message }
  }
}

function GraphAPIDemo() {
  const [graphResponse, setGraphResponse] = useState(null);

  return (
    <div>
      <h1>Graph API</h1>
      <button onClick={() => signIn()}>login by MSAL</button>
      <button
        onClick={async () => {
          const result = await getInfo(graphConfig.graphMeEndpoint());
          setGraphResponse(result);
        }}
      >
        graphMeDrivesEndpoint
      </button>
      <button
        onClick={async () => {
          const result = await getInfo(graphConfig.graphMeDriveEndpoint());
          setGraphResponse(result);
        }}
      >
        graphMeDriveEndpoint
      </button>
      <button
        onClick={async () => {
          const result = await getInfo(
            graphConfig.graphMeDrivesOverviewEndpoint()
          );
          setGraphResponse(result);
        }}
      >
        graphMeDrivesOverviewEndpoint
      </button>

      <div>
        {graphResponse ? (
          <pre>{JSON.stringify(graphResponse, null, 2)}</pre>
        ) : (
          <div>graph API response will be here</div>
        )}
      </div>
    </div>
  );
}

export default GraphAPIDemo;
