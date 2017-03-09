document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var timer;
    var dot_1 = document.getElementById('dot-1');
    dot_1.addEventListener('mouseover', function () {
        timer = setInterval(dot1, 1000);
    });
    dot_1.addEventListener('mouseout', function () {
        clearTimeout(timer);
    });

    function dot1() {
        inner.innerHTML = "0-500 A.D. - Polynesians settle on Hawai'i. Hawaiian fishponds, agricultural systems, complex governing mechanisms, featherwork, hula, and a host of other Hawaiian inoovations emerged until the first European contact."
    }
    var timer_2
    var dot_2 = document.getElementById('dot-2');
    dot_2.addEventListener('mouseover', function () {
        timer_2 = setInterval(dot2, 1000);
    });
    dot_2.addEventListener('mouseout', function () {
        clearTimeout(timer_2);
    });

    function dot2() {
        inner.innerHTML = "1778 - British Captain James Cook reaches Hawai'i. Hawaiians are exposed to foreign diseases and succumb to these by tens of thousands through the next century."
    }
});