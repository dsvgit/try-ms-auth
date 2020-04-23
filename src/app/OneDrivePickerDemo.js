import React, { useState } from "react";

import { makeIframeUrl } from "./utils";

function OneDrivePickerDemo() {
  const [doc, setDoc] = useState(null);

  function launchSaveToOneDrive() {
    const odOptions = {
      clientId: "09b331c7-5221-4605-a0ad-8c4710beae3f",
      action: "save",
      sourceInputElementId: "fileUploadControl",
      sourceUri: "",
      openInNewWindow: true,
      advanced: {},
      success: function (files) {
        /* success handler */
      },
      progress: function (percent) {
        /* progress handler */
      },
      cancel: function () {
        /* cancel handler */
      },
      error: function (error) {
        /* error handler */
      },
    };

    window.OneDrive.save(odOptions);
  }

  function openFromOneDrive() {
    const odOptions = {
      clientId: "09b331c7-5221-4605-a0ad-8c4710beae3f",
      action: "share",
      multiSelect: false,
      advanced: {},
      success: function (files) {
        console.log(files.value[0].webUrl);

        // window.open(files.value[0]);

        setDoc(files.value[0]);
        /* success handler */
      },
      cancel: function () {
        /* cancel handler */
      },
      error: function (error) {
        /* error handler */
      },
    };

    window.OneDrive.open(odOptions);
  }

  return (
    <div>
      <h1>One drive by picker</h1>
      <p>https://js.live.net/v7.2/OneDrive.js</p>
      <div>
        Choose file{" "}
        <input id="fileUploadControl" name="fileUploadControl" type="file" />
        and upload:
        <button
          style={{ marginRight: 10 }}
          onClick={() => {
            launchSaveToOneDrive();
          }}
        >
          Upload to OneDrive
        </button>
        <button
          onClick={() => {
            openFromOneDrive();
          }}
        >
          Load file to preview
        </button>
      </div>
      <div>
        {doc ? (
          <iframe
            width="1000"
            height="600"
            frameBorder="0"
            scrolling="no"
            src={makeIframeUrl(doc.id)}
          />
        ) : (
          <div>preview will be here</div>
        )}
      </div>
    </div>
  );
}

export default OneDrivePickerDemo;
