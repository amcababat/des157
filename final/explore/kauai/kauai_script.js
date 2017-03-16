document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // all other js here
    document.getElementById("fade-in").onload = function () {
        style.opacity = 1;
    };

});