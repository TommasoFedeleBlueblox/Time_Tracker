// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'start') {
    startTimer();
  } else if (request.action === 'stop') {
    stopTimer();
  }
});

function startTimer() {
  // Logic to capture the current item and send start event to Azure
  const currentItem = document.querySelector('.dealTitle'); // Example selector
  if (currentItem) {
    const itemId = currentItem.getAttribute('data-id');
    sendTimeTrackingEvent(itemId, 'start');
  }
}

function stopTimer() {
  // Logic to capture the current item and send stop event to Azure
  const currentItem = document.querySelector('.dealTitle'); // Example selector
  if (currentItem) {
    const itemId = currentItem.getAttribute('data-id');
    sendTimeTrackingEvent(itemId, 'stop');
  }
}

function sendTimeTrackingEvent(itemId, action) {
  // Send a request to your Azure Function API
  fetch('https://your-azure-function-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId, action }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
