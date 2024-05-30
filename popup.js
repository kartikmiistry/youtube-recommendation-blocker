document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-blocker');
  
    chrome.storage.sync.get('isEnabled', (data) => {
      toggle.checked = data.isEnabled;
    });
  
    toggle.addEventListener('change', () => {
      chrome.storage.sync.set({ isEnabled: toggle.checked }, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.reload(tabs[0].id);
        });
      });
    });
  });