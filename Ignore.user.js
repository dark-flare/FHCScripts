// ==UserScript==
// @name           Full Ignore
// @namespace      Failheap
// @description    Hides all posts
// @include        http://failheap-challenge.com/*
// @grant              none
// ==/UserScript==
//

(function (){

/* EDIT THIS BIT */
var user = "usernametoignore";

var allElements, thisElement;
var allElements = document.evaluate("//div[@class='userinfo']",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
var thissign;

for (var i = allElements.snapshotLength -1; i >= 0; i--){
    thisElement = allElements.snapshotItem(i);
    if(thisElement.innerHTML.indexOf(user)!=-1){
        thissign = thisElement;
                thissign.parentNode.style.display = 'none';
        }
}
}());
