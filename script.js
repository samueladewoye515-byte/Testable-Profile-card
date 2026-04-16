(function() {
  "use strict";
  
  const timeElement = document.getElementById('live-time');
  
  function updateEpochTime() {
    if (timeElement) {
      const now = Date.now();
      timeElement.textContent = now; // raw milliseconds number
    }
  }
  
  // Initial render
  updateEpochTime();
  
  // Refresh every second (1000ms)
  const intervalId = setInterval(updateEpochTime, 1000);
  
  // Optional cleanup
  window.addEventListener('beforeunload', function() {
    clearInterval(intervalId);
  });
})();