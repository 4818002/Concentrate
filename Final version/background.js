// JavaScript Document
var webdefined;
var wtweb1,wtweb2,wtweb3,wtweb4,wtweb5;
chrome.tabs.onUpdated.addListener(function(){
//chrome.windows.onFocusChanged.addListener(function(){
    chrome.tabs.getSelected(null, function (tab) {
       if (webdefined==1){
         if ((tab.url == wtweb1) ||
              (tab.url == wtweb2) ||
              (tab.url == wtweb3) ||
              (tab.url == wtweb4) ||
              (tab.url == wtweb5))
              {
                return '';
              }
          else
          {
            chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
              if(changeInfo.status === "loading")
              {
              alert("The past is behind, learn from it:)                                 逝者如斯夫，不捨晝夜:)");
            }
            {break;}
          };
      };
    };
  });4
});



function test(website1,website2,website3,website4,website5){
     chrome.tabs.getSelected(null, function (tab) {
    if ((tab.url == website1) ||
      (tab.url == website2) ||
      (tab.url == website3) ||
      (tab.url == website4) ||
      (tab.url == website5))
      {
      return '';
      }
    else {
        var p = window.prompt("The past is behind, learn from it:)                                 逝者如斯夫，不捨晝夜:)");
        console.log(p);
        };

     webdefined = 1;
     wtweb1 = website1;
     wtweb2 = website2;
     wtweb3 = website3;
     wtweb4 = website5;
     wtweb5 = website5;

    })

};
