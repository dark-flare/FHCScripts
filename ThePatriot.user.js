// ==UserScript==
// @name           The Patriot
// @namespace      Failheap
// @description    Re-patriot Razor's posts
// @include        http://failheap-challenge.com/*
// @grant              none
// ==/UserScript==
//
(function (){

var patriot1 = new RegExp('russians', 'gi');
var patriot1re = 'yankees';
var patriot2 = new RegExp('americans', 'gi');
var patriot2re = 'russkis';
var patriot3 = new RegExp('russian', 'gi');
var patriot3re = 'yankee';
var patriot4 = new RegExp('american', 'gi');
var patriot4re = 'russki';
var patriot5 = new RegExp('russia', 'gi');
var patriot5re = '\'merica';
var patriot6 = new RegExp('america', 'gi');
var patriot6re = 'THE MOTHERLAND';
var patriot7 = new RegExp('terrible', 'gi');
var patriot7re = 'glorious';



var allElements, thisElement;
var allElements = document.evaluate("//div[@class='userinfo']",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = allElements.snapshotLength -1; i >= 0; i--){
    thisElement = allElements.snapshotItem(i);
    if(thisElement.innerHTML.indexOf("RazoR")!=-1){
				var html = thisElement.parentNode.innerHTML;
				html = html.replace(patriot1, patriot1re);
				html = html.replace(patriot2, patriot2re);
				html = html.replace(patriot3, patriot3re);
				html = html.replace(patriot4, patriot4re);
				html = html.replace(patriot5, patriot5re);
				html = html.replace(patriot6, patriot6re);
				html = html.replace(patriot7, patriot7re);
				thisElement.parentNode.innerHTML = html;
                }
        }
}());