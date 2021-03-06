const iReddit = "https://i.reddit.com";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Exclude poll pages
    if (details.url.match(/^https?:\/\/(www\.)*reddit.com\/poll/)) {
      return;
    }

    return {
      redirectUrl:
        iReddit + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
    };
  },
  {
    urls: [
      "*://reddit.com/*",
      "*://www.reddit.com/*",
      "*://old.reddit.com/*",
      "*://np.reddit.com/*",
      "*://new.reddit.com/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  ["blocking"]
);
