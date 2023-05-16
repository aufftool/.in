/*<![CDATA[*/
const url = window.location.search;

const data = new URLSearchParams(url)
var alias = data.get('token')
console.log(alias)
if (alias == "" || alias == null) {

} else {

	// set cookie expiration time
	var expiration = new Date();
	expiration.setTime(expiration.getTime() + (3 * 60 * 1000)); // 3 minutes from now


	document.cookie = "token=" + alias + ";" + "expires=" + expiration.toUTCString() + ";"
 window.location.href = "/";
safeGoL.style.display = "";

}


function get_cookie(cookie_name) {
	let c_name = cookie_name + "=";
	let cookie_decoded = decodeURIComponent(document.cookie);
	let cookie_parts = cookie_decoded.split(';');
	for (let i = 0; i < cookie_parts.length; i++) {
		let c = cookie_parts[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(c_name) == 0) {
			return c.substring(c_name.length, c.length);
		}
	}
	return "";
}

var cookieName = get_cookie("token")
// Get the button element by its id
var button = document.getElementById("mylinkx");
if (cookieName != "") {
	var linkx = "https://aturl.page.link/" + cookieName
	// Update the href attribute of the button element
	button.href = linkx;
}


/*]]>*/
