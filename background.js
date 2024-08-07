// background.js

// Listener for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startTimer') {
    console.log('Starting timer for item:', request.itemId);
    // Call a function to handle starting the timer
    startTimer(request.itemId, sendResponse);
  } else if (request.action === 'stopTimer') {
    console.log('Stopping timer for item:', request.itemId);
    // Call a function to handle stopping the timer
    stopTimer(request.itemId, sendResponse);
  }

  // Return true to indicate that the response will be sent asynchronously
  return true;
});

// Function to start the timer
function startTimer(itemId, sendResponse) {
  // Example of sending a request to your backend API
  fetch('https://pipedrive-timetracker.azurewebsites.net/starttimerfunction?code=HdnWXnTBHF9d42Y6XmnFrUm8fM51yczeyLjo6-OwslPlAzFuu9hjDA%3D%3D', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId: itemId }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Timer started successfully:', data);
      sendResponse({ status: 'success', data: data });
    })
    .catch(error => {
      console.error('Error starting timer:', error);
      sendResponse({ status: 'error', error: error });
    });
}

// Function to stop the timer
function stopTimer(itemId, sendResponse) {
  // Example of sending a request to your backend API
  fetch('https://pipedrive-timetracker.azurewebsites.net/stoptimerfunction?code=qSl53wJ4QiX-gxe71pPfx14it69IpPwKMNsdjhD2KNxBAzFu2sN6Hw%3D%3D', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId: itemId }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Timer stopped successfully:', data);
      sendResponse({ status: 'success', data: data });
    })
    .catch(error => {
      console.error('Error stopping timer:', error);
      sendResponse({ status: 'error', error: error });
    });
}
