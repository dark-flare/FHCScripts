// ==UserScript==
// @name           Tapatalk Fixer
// @namespace      Failheap
// @description    Fixes Tapatalk
// @include        http://failheap-challenge.com/*
// @grant              none
// ==/UserScript==
//
(function (){

var phrase = new RegExp('tapatalk', 'gi');
var phrasere = 'im gay';

var allElements, thisElement;
var allElements = document.evaluate("//div[@class='postbody']",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = allElements.snapshotLength -1; i >= 0; i--){
    thisElement = allElements.snapshotItem(i);
   	var html = thisElement.innerHTML;
				html = html.replace(phrase, phrasere);
				thisElement.innerHTML = html;
                }
}());