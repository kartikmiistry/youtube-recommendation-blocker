chrome.storage.sync.get('isEnabled', (data) => {
    if (data.isEnabled) {
      hideRecommendations();
    }
  });
  
  function hideRecommendations() {
    const recommendedSections = document.querySelectorAll('#related, #primary, #secondary');
    recommendedSections.forEach(section => {
      section.style.display = 'none';
    });
  }