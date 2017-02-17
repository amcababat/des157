// JavaScript Document

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //show today's date
    var t_date = document.getElementById('t_date');
    var show_date = document.getElementById('show_date');
    var tipTimer;
    var d = new Date();
    var n = d.getDate();
    t_date.addEventListener('mouseover', function () {
        console.log('mouseover on todays date is');
        tipTimer = setInterval(showTheDate, 1000);
    });
    t_date.addEventListener('mouseout', function () {
        console.log('mouseout on t_date');
        clearTimeout(tipTimer);
        show_date.style.opacity = 0;
    });

    function showTheDate() {
        console.log('show the date');
        document.getElementById("show_date").innerHTML = "February " + n + "th " + "2017";
        show_date.style.opacity = 1;
        show_date.style.transition = 'all .5s';
    }

    //code for countdown
    var end = new Date('02/15/2017 12:0 AM'); //put in the date here

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' days : ';
        document.getElementById('countdown').innerHTML += hours + ' hrs : ';
        document.getElementById('countdown').innerHTML += minutes + ' mins : ';
        document.getElementById('countdown').innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);

    var c_date = document.getElementById('c_date');
    var c_Tip;
    countdown.addEventListener('mouseover', function () {
        console.log('mouseover on counter');
        c_Tip = setTimeout(showHoliday, 1000);
    });
    countdown.addEventListener('mouseout', function () {
        clearTimeout(c_Tip);
        c_date.style.opacity = 0;
    });

    function showHoliday() {
        console.log('show the holiday');

        document.getElementById("c_date").innerHTML = "Until Valentine's Day is over";
        c_date.style.opacity = 1;
        c_date.style.transition = 'all .5s';
    }

    //code for the hover me heart
    var ask = document.getElementById('ask');
    var question = document.getElementById('question');
    var a_Tip;
    var imgs_array
    question.addEventListener('mouseover', function () {
        console.log('mouse over on hover me heart');
        a_Tip = setInterval(askQuestion, 1000);
    });
    question.addEventListener('mouseout', function () {
        clearTimeout(a_Tip);
        ask.style.opacity = 0;
    });

    function askQuestion() {
        console.log('ask question');
        document.getElementById('ask').innerHTML = "Will you be my valentine? Hover over the red heart to see the answer.";
        ask.style.opacity = 1;
        ask.style.transition = 'all 1';
    }

    //array for images
    var heart = document.getElementById('heart');

    heart.addEventListener('mouseover', function () {
        heart.src = imgs[Math.floor(Math.random() * imgs.length)];
    });

    heart.addEventListener('mouseout', function () {
        heart.src = "heart_images/my_answer.png";
    });
    var imgs = ["heart_images/fuck_you.png", "heart_images/I_guess.png", "heart_images/I_hate_you.png", "heart_images/never.png", "heart_images/yes.png"];

    var preload = [];

    for (var i = 0; i < imgs.length; i++) {
        preload[i] = new Image();
        preload[i].src = imgs[i];
        console.log(preload[i]);
    }
});
