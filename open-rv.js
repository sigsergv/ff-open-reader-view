
function readerViewIt() {
	var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
	gettingActiveTab.then(function(tabs) {
		if (!tabs[0]) {
			return;
		}
		var currentTab = tabs[0];
		
		var rvUrl = 'about:reader?url=' + currentTab.url
		browser.tabs.create({
			openInReaderMode: true,
			url: currentTab.url
		});
		
	});
}

browser.browserAction.onClicked.addListener(readerViewIt);
