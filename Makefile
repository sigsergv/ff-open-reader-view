zip:
	rm -f extension.zip
	zip -r extension.zip icons manifest.json open-rv.js

source:
	rm -f ff-open-reader-view.zip
	zip -r ff-open-reader-view.zip icons manifest.json open-rv.js Makefile README.md
