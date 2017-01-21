var callback = function(details) {
  var lenta = /^[\w]+:\/\/lenta.ru.*$/i;
  var life = /^[\w]+:\/\/life(news){0,1}.ru.*$/i;
  if (details.url.match(lenta)) {
    return {redirectUrl: "https://meduza.io/"};
  } else if (details.url.match(life)) {
    return {redirectUrl: "https://buzzfeed.com/"};
  }
};

var filter = {
  urls: [
    "*://lenta.ru/*",
    "*://life.ru/*",
    "*://lifenews.ru/*"
  ]
};

var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
