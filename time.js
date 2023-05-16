(function() {
	var message = "%d seconds before download link appears";
	// seconds before download link becomes visible
	var count = 10;
	var countdown_element = document.getElementById("countdown");
	var download_link = document.getElementById("download_link");
	var timer = setInterval(function() {
		// if countdown equals 0, the next condition will evaluate to false and the else-construct will be executed
		if (count) {
			// display text
			countdown_element.innerHTML = "You have to wait %d seconds.".replace("%d", count);
			// decrease counter
			count--;
		} else {
			// stop timer
			clearInterval(timer);
			// hide countdown
			countdown_element.style.display = "none";
			// show download link
			download_link.style.display = "";
			download_linkt.style.display = "";
		}
	}, 1500);
})();