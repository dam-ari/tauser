// Load the saved user ID, if it exists
chrome.storage.sync.get("userId", (data) => {
    if (data.userId) {
      document.getElementById('userIdInput').value = data.userId;
    }
  });
  
  // Save the user ID when the button is clicked
  document.getElementById('saveButton').addEventListener('click', () => {
    const userId = document.getElementById('userIdInput').value;
    chrome.storage.sync.set({ userId }, () => {
      alert('User ID saved!');
    });
  });