document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    var isle = document.getElementById('islands');

    var fade = document.getElementsByClassName('fade');

    fade.addEventListener('mouseover', function () {
        fade.style.transition = "opacity 1s";
    });
});