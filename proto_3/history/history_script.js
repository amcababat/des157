document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //1
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

    //2
    var timer_2;
    var dot_2 = document.getElementById('dot-2');
    dot_2.addEventListener('mouseover', function () {
        timer_2 = setInterval(dot2, 1000);
    });
    dot_2.addEventListener('mouseout', function () {
        clearInterval(timer_2);
    });

    function dot2() {
        inner.innerHTML = "1778 - British Captain James Cook reaches Hawai'i. Hawaiians are exposed to foreign diseases and succumb to these by tens of thousands through the next century."
    }
    //3
    var timer_3;
    var dot_3 = document.getElementById('dot-3');
    dot_3.addEventListener('mouseover', function () {
        timer_3 = setInterval(dot3, 1000);
    });
    dot_3.addEventListener('mouseout', function () {
        clearInterval(timer_3);
    });

    function dot3() {
        inner.innerHTML = "1810 - Kamehameha I politically unifies Hawai'i, thereby establishing the Hawaiian Kingdom. He ruled the Hawaiian kingdom until his death in 1819. His first son took over the throne."
    }
    //4
    var timer_4;
    var dot_4 = document.getElementById('dot-4');
    dot_4.addEventListener('mouseover', function () {
        timer_4 = setInterval(dot4, 1000);
    });
    dot_4.addEventListener('mouseout', function () {
        clearInterval(timer_4);
    });

    function dot4() {
        inner.innerHTML = "1843 - France and Britain issue a joint declaration formally recognizing the Hawaiian Kingdom as an independent sovereign nation."
    }
    //5
    var timer_5;
    var dot_5 = document.getElementById('dot-5');
    dot_5.addEventListener('mouseover', function () {
        timer_5 = setInterval(dot5, 1000);
    });
    dot_5.addEventListener('mouseout', function () {
        clearInterval(timer_5);
    });

    function dot5() {
        inner.innerHTML = "The U.S. and the Hawaiian Kingdom enter into the Hawaiian-American Treaty of Friendship, Commerce, and Navigation of 1849, committing the nations to peaceful political and economic interaction."
    }
    //6
    var timer_6;
    var dot_6 = document.getElementById('dot-6');
    dot_6.addEventListener('mouseover', function () {
        timer_6 = setInterval(dot6, 1000);
    });
    dot_6.addEventListener('mouseout', function () {
        clearInterval(timer_6);
    });

    function dot6() {
        inner.innerHTML = "The U.S. and the Kingdom of Hawai'i ratify a reciprocity treaty, allowing for duty-free entry of Hawai'i sugar to the U.S. This results in the sugar industry enjoying phenomenal profits and expands at an exponential rate. Hawai'i lands and water resources increasingly devoted to sugar production."
    }
    //7
    var timer_7;
    var dot_7 = document.getElementById('dot-7');
    dot_7.addEventListener('mouseover', function () {
        timer_7 = setInterval(dot7, 1000);
    });
    dot_7.addEventListener('mouseout', function () {
        clearInterval(timer_7);
    });

    function dot7() {
        inner.innerHTML = "New U.S. legislation ends the competitive advantages that earlier treaties afforded the Hawai'i sugar industry, dealing the sugar businessmen in Hawai'i a devasting blow. As a result, they start planning for the annexation of Hawai'i to the U.S. as a permanent solution to ensure their continued profits. This plot resulted in the formation of the Committee of Safety."
    }
    //8
    var timer_8;
    var dot_8 = document.getElementById('dot-8');
    dot_8.addEventListener('mouseover', function () {
        timer_8 = setInterval(dot8, 1000);
    });
    dot_8.addEventListener('mouseout', function () {
        clearInterval(timer_8);
    });

    function dot8() {
        inner.innerHTML = "The Committe of Safety convinced American Ambassador Minister Stevens to land American troops on Hawaiian soil. The monarch at the time Queen Liliu'okalani did not want conflict with the U.S. So she had no choice but to surrender her executive power. In order to assure that she will be able to regain her title, Queen Liliu'oukalani surrendered the kingdom to the U.S. government instead of the Committee of Safety. For a more detailed narration, click on the image."
    }
});