chrome.runtime.onInstalled.addListener(() => {
  // TODO: if user doesnt have a user ID, open options
    chrome.runtime.openOptionsPage();
  });