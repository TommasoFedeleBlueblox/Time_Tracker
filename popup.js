// popup.js
// document.getElementById('startBtn').addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, { action: 'start' });
//   });
// });

// document.getElementById('stopBtn').addEventListener('click', () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, { action: 'stop' });
//   });
// });

document.getElementById('startBtn').addEventListener('click', () => {
chrome.runtime.sendMessage({ action: 'startTimer', itemId: 'your-item-id' }, (response) => {
    if (response && response.status === 'success') {
    console.log('Timer started successfully:', response.data);
    } else {
    console.error('Error starting timer:', response.error);
    }
});
});

document.getElementById('stopBtn').addEventListener('click', () => {
chrome.runtime.sendMessage({ action: 'stopTimer', itemId: 'your-item-id' }, (response) => {
    if (response && response.status === 'success') {
    console.log('Timer stopped successfully:', response.data);
    } else {
    console.error('Error stopping timer:', response.error);
    }
});
});