page.includeCSS {
	#slick = fileadmin/templates/libs/slick/slick.css
	#slickTheme = fileadmin/templates/libs/slick/slick-theme.css
	#sm-core = fileadmin/templates/libs/smart-menus/css/sm-core-css.css
	#sm-simple = fileadmin/templates/libs/smart-menus/css/sm-simple/sm-simple.css
	#sm-blue = fileadmin/templates/libs/smart-menus/css/sm-blue/sm-blue.css
	#fl = fileadmin/templates/libs/featherlight/featherlight.css
	#prettify = fileadmin/templates/libs/prettify/prettify.css
	main = fileadmin/templates/css/style.css
}

page.includeJS {
	#prettify = fileadmin/templates/libs/prettify/prettify.js
	#typekit = https://use.typekit.net/vfsenmkls.js
	#typekit.external = true
}

page.includeJSFooter {
	#slick = fileadmin/templates/libs/slick/slick.min.js
	#sm = fileadmin/templates/libs/smart-menus/jquery.smartmenus.js
	#fl = fileadmin/templates/libs/featherlight/featherlight.js
	#parallax = fileadmin/templates/libs/parallax.min.js
	#masonry = fileadmin/templates/libs/masonry.js
	#googleMaps = https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&callback=initMap
	#googleMaps {
	#	async = 1
	#	defer = 1
	#	external = 1
	#}
	func = fileadmin/templates/js/functions.js
}

### body modifications
page.bodyTagCObject = TEXT
page.bodyTagCObject.field = uid
page.bodyTagCObject.wrap = <body id="pid-|">

###  News-Detailseiten
#[globalVar = GP:tx_news_pi1|news > 0]
#config.noPageTitle = 2

#page.headerData.1 = CONTENT
#page.headerData.1 {
#	table = tx_news_domain_model_news
#	select {
#		# pid des Newsstorage-Folders setzen
#		pidInList = 31,32,33,34
#		uidInList.data = GP:tx_news_pi1|news
#		#languageField = sys_language_uid
#	}
#	renderObj = TEXT
#	renderObj.field = title
#	#renderObj.data = GP:tx_news_pi1|news
#	renderObj.wrap = <title>REWE PETZ:&nbsp;|</title>
#}
#[global]

# JSFooterLibs to JSLibs

page {
#	includeJSLibs {
#		jquery < page.includeJSFooterlibs.jquery
#		flexslider2 < page.includeJSFooterlibs.flexslider2
#	}
#	includeJSFooterlibs {
#		jquery >
#		includeJSFooterlibs.flexslider2 >
#		powermailJQuery >
#	}
	headerData.1901 = TEXT
	headerData.1901.value (
		<link rel="apple-touch-icon" sizes="57x57" href="/fileadmin/templates/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/fileadmin/templates/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/fileadmin/templates/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/fileadmin/templates/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/fileadmin/templates/favicon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/fileadmin/templates/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/fileadmin/templates/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/fileadmin/templates/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/fileadmin/templates/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="/fileadmin/templates/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/fileadmin/templates/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="/fileadmin/templates/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/fileadmin/templates/favicon/favicon-16x16.png">
		<link rel="manifest" href="/fileadmin/templates/favicon/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/fileadmin/templates/favicon/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">
	)
}

page.meta.viewport = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0

# Default PAGE object:
page = PAGE
page.shortcutIcon = fileadmin/templates/favicon/favicon.ico
page.1 = TEXT
#page.1.value (
#	<div class="loader">
#		<img src="fileadmin/templates/images/logo.svg" class="logo" width="200" height="86" />
#		<img src="fileadmin/templates/images/loader.gif" width="35" height="35" />
#		<noscript>
#			Diese Webseite benötigt JavaScript.<br/>
#			Bitte aktivieren Sie JavaScript und laden Sie die Seite neu.
#		</noscript>
#	</div>
#)
page.10 < styles.content.get
page.10 = FLUIDTEMPLATE
page.10 {
	file = fileadmin/templates/fluid/start.html
	partialRootPath = fileadmin/templates/fluid/partials/
	layoutRootPath = fileadmin/templates/fluid/layouts/
}

# Aussagekräftige Fehlermeldungen
#page.config.contentObjectExceptionHandler = 0