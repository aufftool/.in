/*<![CDATA[*/ var uri = window.location.toString();if (uri.indexOf("?m=1","?m=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri); }; 

function get_cookie(cookie_name) {
let c_name = cookie_name + "=";
let cookie_decoded = decodeURIComponent(document.cookie);
let cookie_parts = cookie_decoded.split(';');
for(let i = 0; i <cookie_parts.length; i++) {
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


if (cookieName != "" ) {
var linkx = "https://aturl.page.link/"+cookieName
const encodedStr = btoa(linkx);
var resultgenerate = cookieName;
var button = document.getElementById("mylinkx");
//window.location.href = resultgenerate;
safeGoL.style.display = "";
}



function hideButton(x)
{
	x.style.display = 'none';
	v.style.display = '';
};
/*]]>*/