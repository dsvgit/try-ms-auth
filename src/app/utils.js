const querySerialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export function makeIframeUrl(id) {
  return `https://onedrive.live.com/embed?${querySerialize({
    resid: id,
    authkey: "!AJ3D562KdJDq5LI",
    em: "2",
    AllowTyping: "True",
    wdAllowInteractivity: "True",
    wdHideGridlines: "True",
    wdHideHeaders: "True",
    wdDownloadButton: "True",
    wdInConfigurator: "True",
  })}`;
}
