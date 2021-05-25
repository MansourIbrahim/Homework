'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  document.body.removeChild(document.body.firstChild);
  var today = new Date();
  var time = document.createTextNode(
    `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  );

  document.body.appendChild(time);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page

window.setInterval(addCurrentTime, 1000);
