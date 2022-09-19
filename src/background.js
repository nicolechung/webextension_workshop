async function getTab() {
  const queryOptions = { active: true, currentWindow: true }
  const [firstTab] = await chrome.tabs.query(queryOptions)
  return firstTab
}

chrome.tabs.onUpdated.addListener(function () {
  getTab().then((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ['contentScripts/index.tsx'],
    })
  })
})
