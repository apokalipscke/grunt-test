# grunt-test templates
Standard Typo3 Templates-Verzeichnis

## Anwendung
* `npm install` dependencies installieren
* `grunt watch` automatischer FTP-Upload und jshint von JS und CSS nach dem Speichern
* `grunt` jshint, sass, replace und uglify
* `grunt deploy` kompletten build ausführen und FTP-Upload

## Ordnerstruktur
```
templates
+---css [Custom S/CSS]
+---ext [Extensiontemplates]
+---favicon [Files for favicons]
+---fluid [Fluidtemplates]
|  +---layouts
|  |  +---default.html
|  +---partials
|  |  +---footer.html
|  |  +---header.html
|  +---start.html
+---images [Images for use in Templates]
+---js [Custom JavaScript]
|  +---functions.js
+---libs [JS / CSS libs]
+---ts [TypoScript]
   +---constants.ts
   +---page.ts
   +---setup.ts
```
