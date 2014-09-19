// Global variables
var isNav, isIE, isIE5mac
var coll = ""
var styleObj = ""
if (parseInt(navigator.appVersion) >= 4) {
	if (navigator.appName == "Netscape") {
		isNav = true
	} else {
		isIE = true
		if ((navigator.userAgent.indexOf("MSIE 5.") != -1) && navigator.platform == "MacPPC" ) isIE5mac = true
		coll = "all."
		styleObj = ".style"
	}
}
