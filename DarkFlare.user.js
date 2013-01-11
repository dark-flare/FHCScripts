// ==UserScript==
// @name           DarkFlare Fixer
// @namespace      Failheap
// @description    Fixes Dark Flare
// @include        http://failheap-challenge.com/*
// @grant              none
// ==/UserScript==
//

(function (){
	// EDIT THIS VAR
	var yourusername = "Dark Flare"
 	// EDIT THAT VAR ^

var phrase = new RegExp('(?:<strong>(.*)' + yourusername + '(.*)<\/strong>)', 'gi');
var phrasere = '<strong><div style=\"color:orange;font-weight:bold;display:inline;padding:0;\">' + yourusername + '</div></strong>';

var allElements, thisElement;
var allElements = document.evaluate("//div[@class='username_container']",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = allElements.snapshotLength -1; i >= 0; i--){
	thisElement = allElements.snapshotItem(i);
     if(thisElement.innerHTML.indexOf(yourusername)!=-1){
     		var html = thisElement.innerHTML;
				html = html.replace(phrase, phrasere);
				thisElement.innerHTML = html;
     }
                }
}());