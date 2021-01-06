document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      var p = window.prompt("The past is behind, learn from it:)");
      console.log(p);
    });
  },false);
},false);

function clearWebsites(){
    $(".form-website-input").val('');
}
document.addEventListener('DOMContentLoaded', function () {
  var clearWebsitesButton = document.getElementById('website-clear-button')
    clearWebsitesButton.addEventListener('click', clearWebsites);
});


function createWebsites(tab){
  var website1 = $("#website-location-1").val();
  var website2 = $("#website-location-2").val();
  var website3 = $("#website-location-3").val();
  var website4 = $("#website-location-4").val();
  var website5 = $("#website-location-5").val();
  chrome.extension.getBackgroundPage().test(website1,website2,website3,website4,website5);
};
document.addEventListener('DOMContentLoaded', function (){
  var createWebsitesButton = document.getElementById('website-create-button');
    createWebsitesButton.addEventListener('click', createWebsites);
});
