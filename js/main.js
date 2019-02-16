function GetStorage() {
  let result = 0;
  if (typeof localStorage.getItem("Close_app_Suggestion") !== "undefined")
    result = localStorage.getItem("Close_app_Suggestion");  
  return result;
}
$(document).on("click", "#CloseSuggestion", function() {  
  $("#SuggestionForMobileApp").remove();
  localStorage.setItem("Close_app_Suggestion", "1");
});
function DetectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}
function IsIos() {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  ) {
    return true;
  } else {
    return false;
  }
}
function IsAndroid() {
  if (navigator.userAgent.match(/Android/i)) {
    return true;
  } else {
    return false;
  }
}
function BuildDownloadUrl() {
  if (IsIos()) return "https://sibapp.com/applications/modiseh";
  if (IsAndroid())
    return "https://cafebazaar.ir/app/com.golestanec.modiseh/?l=en";
}
function BuildHtml() {
  let result =
    '<div id="SuggestionForMobileApp" style="height: 50px;">' +
    '<div style="position: absolute;width: 100%;top: 53px;padding: 0;font-size: 15px;padding: 8px;color: rgba(255,111,104,0.7);">' +
    "<p>" +
    '<i id="CloseSuggestion" class="close icon-navigate_cross" style="cursor:pointer;position:relative;float: right;font-size: 30px;margin-left: 10px;margin-top: -10px;"></i>' +
    "با دانلود اپلیکیشن آسان تر خرید کنید ." +
    '<a style="cursor:pointer !important;" href="' +
    BuildDownloadUrl() +
    '">' +
    '<img src="/content/files/content/favicon.png" style="height: 35px;float: left;margin-left: 20px;margin-bottom: 10px;margin-top: -5px;border: 1px solid;padding: 3px;border-radius: 5px;">' +
    "</a>" +
    "</p>" +
    "</div>" +
    "</div>";
  return result;
}
function SuggestApp() {
  $("body").prepend(BuildHtml());
}
$(function() {
  if (DetectMobile())
    if (GetStorage() != "1") SuggestApp();
});
