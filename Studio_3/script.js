// JavaScript Document

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //define variables
    var inner = document.getElementById('inner');
    inner.addEventListener('mouseout', mouseOut);

    function mouseOut() {
        inner.innerHTML = "";
    }

    var full_one = document.getElementById('full_one');

    full_one.addEventListener('mouseover', function () {
        full_one.style.transition = "opacity 1s";
        inner.innerHTML = "I started reading manga when I was eight. My parents didn't really like that I spend most of my allowance on comic books."
    });
    full_one.addEventListener('mouseout', function() {
      inner.innerHTML = ""
    });
    //code for design books
    //make the variable
    var full_two = document.getElementById('full_two');
    //make the function
    full_two.addEventListener('mouseover', function () {
        full_two.style.transition = "opacity 1s";
        inner.innerHTML = "Ever since I switched my major to design, I started to love learning again. I always feel as if I am way behind in skill in comparison to my peers, so I buy design books and keep the textbooks from the class from time to time."
    });
    //code for sketchbooks
    //make the variable
    var full_three = document.getElementById('full_three');
    //make the function
    full_three.addEventListener('mouseover', function () {
        full_three.style.transition = "opacity 1s";
        inner.innerHTML = "I've been drawing since I was little. I like to draw characters and figures, but these days my sketchbooks are mostly filled with design sketches."
    });
    //code for sci-fi books
    //make the variable
    var full_four = document.getElementById('full_four');
    //make the function
    full_four.addEventListener('mouseover', function () {
        full_four.style.transition = "opacity 1s";
        inner.innerHTML = "These are some of the many sci-fi books I own. I started to read avidly when I was eleven. From then on, sci-fi, fantasy, and fiction books are part of what I spent my allowance on."
    });
    //code for plushie
    //make the variable
    var full_five = document.getElementById('full_five');
    //make function
    full_five.addEventListener('mouseover', function () {
        full_five.style.transition = "opacity 1s";
        inner.innerHTML = "Stitch is one of my all-time favorite characters. I own several plushies of him as well as other characters."
    });
    //code for animation books
    //make the variable
    var full_six = document.getElementById('full_six');
    //make the function
    full_six.addEventListener('mouseover', function () {
        full_six.style.transition = "opacity 1s";
        inner.innerHTML = "I aim to learn about animation someday. So I buy books on animation sometimes, but I haven't gotten as far as I wanted to in reading them."
    });

});
