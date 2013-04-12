// ==UserScript==
// @name Quack Remover
// @namespace Failheap
// @description Hides any post QuackBot makes, and any post that quotes a post QuackBot makes
// @include http://failheap-challenge.com/*
// @grant none
// ==/UserScript==
//
(function (){

var allElements, thisElement;
var allElements = document.evaluate("//div[@class='userinfo']",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = allElements.snapshotLength -1; i >= 0; i--){
    thisElement = allElements.snapshotItem(i);
    if((thisElement.innerHTML.indexOf("QuackBot")!=-1) || (thisElement.parentNode.innerHTML.indexOf("Originally Posted by QuackBot")!=-1) || (thisElement.parentNode.innerHTML.indexOf("Originally Posted by <strong>QuackBot</strong>")!=-1)){
thisElement.parentNode.style.display = 'none';
                }
        }
}());
