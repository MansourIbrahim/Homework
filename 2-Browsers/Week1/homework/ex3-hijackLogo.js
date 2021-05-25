'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // TODO your code goes in here
  let googleLogo = document.querySelectorAll('img');
  googleLogo[4].src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogo[4].srcset =
    'https://www.hackyourfuture.dk/static/logo-dark.svg 480w,https://www.hackyourfuture.dk/static/logo-dark.svg 500w';
}

hijackGoogleLogo();
