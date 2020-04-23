
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters,
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
export const msalConfig = {
  auth: {
    clientId: "your config",
    authority: "https://login.microsoftonline.com/consumers",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["openid", "profile", "User.Read", "Files.Read"]
};

// Add here scopes for access token to be used at MS Graph API endpoints.
export const tokenRequest = {
  scopes: ["Mail.Read"]
};


