chrome.tabs.onUpdated.addListener(function () {
  chrome.tabs.executeScript({
    target: { tabId: id, allFrames: true },
    file: ["contentScripts/index.tsx"],
  });
});
