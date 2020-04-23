export function callMSGraph(endpoint, token, callback) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  console.log("request made to Graph API at: " + new Date().toString());
  console.log("request made to Graph API endpoint: ", endpoint);

  return fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => response);
}
