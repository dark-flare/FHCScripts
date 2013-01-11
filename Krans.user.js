// ==UserScript==
// @name           Kransthow Fixer
// @namespace      Failheap
// @description    Removes images from Kransthow posts
// @include        http://failheap-challenge.com/*
// @grant              none
// ==/UserScript==
//

(function (){

var allElements, thisElement;
var allElements = document.evaluate("//div[@class='userinfo']",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = allElements.snapshotLength -1; i >= 0; i--){
    thisElement = allElements.snapshotItem(i);
    if(thisElement.innerHTML.indexOf("Kransthow")!=-1){
        var imgs = thisElement.parentNode.getElementsByTagName('img');
        for (j = 0; j < imgs.length; j++){
            img = imgs[j];
            if(!img.src.match(/^https?:\/\/(www\.)?failheap-challenge\.com/)){
            img.setAttribute('src', "");
			    }
            }
    	}
	}	
}());