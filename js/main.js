
$('input').on('change', function () {
    if (document.getElementById('yes').checked) {
        localStorage.setItem("Remote", "yes");
    } else if (document.getElementById('no').checked) {
        localStorage.setItem("Remote", "no");
    }
});
$(function () {
    let result = localStorage.getItem("Remote");
    if (result == "yes") {
        $("#yes").prop("checked", true);
    } else {
        $("#no").prop("checked", true);
    }
});

