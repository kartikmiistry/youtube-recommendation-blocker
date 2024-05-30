chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ isEnabled: false });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.youtube.com' },
        })],
        actions: [new chrome.declarativeContent.ShowAction()]
      }]);
    });
  });