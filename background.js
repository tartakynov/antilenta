chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "https://meduza.io/"};
  },
  {urls: ["*://lenta.ru/*"]}, // list of URLs
  ["blocking"] // Block intercepted requests until this handler has finished
);
