const cookieContainer = document.querySelector('.cookie-container');
const cookieButton = document.querySelector('.cookie-btn');

cookieButton.addEventListener('click', () => {
	cookieContainer.classList.remove('active');

	// use local storage to know if the user has pressed the OKAY BTN
	localStorage.setItem('cookieBannerDisplayed', 'true');
	/* Steps:

        Clear the BROWSER'S CACHE (for retesting).

        Open Inspector Tools > Find Application Tab >

        Find Cache Section > Click Back/forward cache >

        Click the button below your URL:
        (FOR EXAMPLE: http://127.0.0.1:5500/index.html)
        so the window gets refreshed.

        NOW YOU NEED TO CLICK THE BUTTON ON THE WEBSITE (front-end).

        Click Local Storage dropdown > Click your URL > and you should
        see what you wronte inside (localStorage.setItem('cookieBannerDisplayed', 'true');)
        and this means it is working.

        You can now refresh the page or navigate and this COOKIE INFO will not be displayed
        again for the same user.

        If you clear the BROWSER'S CACHE you will get it back.
    */
});

// display the cookie consent box 1 second after the page loads
setTimeout(() => {
	if (!localStorage.getItem('cookieBannerDisplayed')) {
		cookieContainer.classList.add('active');
	}
}, 1000);

// Once the user clicks the OKAY BTN we don not want to display the cookie consent box anymore
