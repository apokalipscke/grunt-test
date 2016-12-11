### typo3 kommentare entfernen
lib.stdheader {
	5.prefixComment >
	stdWrap.prefixComment >
}
tt_content.stdWrap.prefixComment >
tt_content.stdWrap.prepend >

# Typo3 Layout Optionen Content-Elemente
tt_content.stdWrap.wrap.cObject = CASE
tt_content.stdWrap.wrap.cObject {
	key.field = layout

	## Container
	#10 = TEXT
	#10.value = <div class="contentelement"><div class="container">|</div></div>
	## Container News
	#11 = TEXT
	#11.value = <div class="csc-default container newslist">|</div>
	## Container News Hintergrund grau
	#12 = TEXT
	#12.value = <div class="csc-default layout-grau"><div class="container newslist">|</div></div>
}

# Typo3 Frame Optionen Content-Elemente
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
	key.field = section_frame
	#100 = TEXT
	#100.value = <div class="bg-color-2">|</div>
	#110 = TEXT
	#110.value = <div class="bg-color-3">|</div>
	#120 = TEXT
	#120.value = <div class="bg-color-4">|</div>
}

lib.main-content < styles.content.get

lib.math = TEXT
lib.math {
  current = 1
  prioriCalc = 1
}

#lib.slider < styles.content.get
#lib.slider {
#  select {
#  where = colPos=1
#  languageField=sys_language_uid
#  }
#  slide = -1
#}

#lib.slidernav = CONTENT
#lib.slidernav {
#  table=tt_content
#  select {
#  where = colPos=1
#  languageField=sys_language_uid
#  selectFields = header
#  }
#  slide = -1
#  renderObj = COA
#  renderObj{
#    10 = TEXT
#    10{
#      required = 1
#      wrap = <div class="navitem">|</div>
#      field = header
#    }
#  # Folgendes TEXT Element gibt alle verfügbaren Felder aus, d.h. wenn man selectFields nicht setzt sieht man hier alle Felder die in der Datenbank vorhanden sind.
#  #20=TEXT
#  #20.data = debug:data
#  }
#}

### Set default class for ul from rte
#lib.parseFunc_RTE {
#  externalBlocks := addToList(ul)
#  externalBlocks {
#    ul.stripNL = 1
#    ul.callRecursive = 1
#    ul.callRecursive.tagStdWrap.HTMLparser = 1
#    ul.callRecursive.tagStdWrap.HTMLparser.tags.ul {
#      fixAttrib.class.default = scroll-animation contentList
#    }
#  }
#}