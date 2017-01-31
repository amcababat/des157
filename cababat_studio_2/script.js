// JavaScript Document

console.log('reading');
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //capture the submit event
    document.q1.onsubmit = processForm;

    //define process function
    function processForm() {

        //store user name in a variable
        //first question
        var userName = document.q1.userName.value;
        var myMsg1 = document.getElementById('myMsg1');
        if (userName == "Kinomoto") {
            myMsg1.innerHTML = 'Your answer is correct!'
        } else {
            myMsg1.innerHTML = 'Your answer is incorrect.'
        }

        //second question
        var firstCard = document.q1.firstCard.value;
        var myMsg2 = document.getElementById('myMsg2');
        if (firstCard == "Windy") {
            myMsg2.innerHTML = 'Your answer is correct!'
        } else {
            myMsg2.innerHTML = 'Your answer is incorrect.'
        }

        //third question
        var year = document.q1.year.value;
        var myMsg3 = document.getElementById('myMsg3');
        if (year == "1996") {
            myMsg3.innerHTML = 'Your answer is correct!'
        } else {
            myMsg3.innerHTML = 'Your answer is incorrect.'
        }
        //fourth question
        var cardcaptor = document.q1.cardcaptor.value;
        var myMsg4 = document.getElementById('myMsg4');
        if (cardcaptor == "appointed") {
            myMsg4.innerHTML = 'Your answer is correct!'
        } else {
            myMsg4.innerHTML = 'Your answer is incorrect.'
        }
        //fifth question
        var cardNumber = document.q1.cardNumber.value;
        var myMsg5 = document.getElementById('myMsg5');
        if (cardNumber == "53") {
            myMsg5.innerHTML = 'Your answer is correct!'
        } else {
            myMsg5.innerHTML = 'Your answer is incorrect.'
        }

        //sixth question
        var rivalName = document.q1.rivalName.value;
        var myMsg6 = document.getElementById('myMsg6');
        if (rivalName == "53") {
            myMsg6.innerHTML = 'Your answer is correct!'
        } else {
            myMsg6.innerHTML = 'Your answer is incorrect.'
        }
        //seventh question
        var mName = document.q1.mName.value;
        var myMsg7 = document.getElementById('myMsg7');
        if (mName == "Nadeshiko") {
            myMsg7.innerHTML = 'Your answer is correct!'
        } else {
            myMsg7.innerHTML = 'Your answer is incorrect.'
        }
        //eigth question
        var fName = document.q1.fName.value;
        var myMsg8 = document.getElementById('myMsg8');
        if (fName == "Fujitaka") {
            myMsg8.innerHTML = 'Your answer is correct!'
        } else {
            myMsg8.innerHTML = 'Your answer is incorrect.'
        }
        //ninth question
        var c_parents = document.q1.c_parents.value;
        var myMsg9 = document.getElementById('myMsg9');
        if (c_parents == "C_E") {
            myMsg9.innerHTML = 'Your answer is correct!'
        } else {
            myMsg9.innerHTML = 'Your answer is incorrect.'
        }
        //tenth question
        var c_fate = document.q1.c_fate.value;
        var myMsg10 = document.getElementById('myMsg10');
        if (c_fate == "split") {
            myMsg10.innerHTML = 'Your answer is correct!'
        } else {
            myMsg10.innerHTML = 'Your answer is incorrect.'
        }
        //eleventh question
        var anime_c = document.q1.anime_c.value;
        var myMsg11 = document.getElementById('myMsg11');
        if (anime_c == "Meilin") {
            myMsg11.innerHTML = 'Your answer is correct!'
        } else {
            myMsg11.innerHTML = 'Your answer is incorrect.'
        }
        //twelfth question
        var lastCard = document.q1.lastCard.value;
        var myMsg12 = document.getElementById('myMsg12');
        if (lastCard == "The Hope") {
            myMsg12.innerHTML = 'Your answer is correct!'
        } else {
            myMsg12.innerHTML = 'Your answer is incorrect.'
        }
        //thirteenth question
        var costume = document.q1.costume.value;
        var myMsg13 = document.getElementById('myMsg13');
        if (costume == "Tomoyo") {
            myMsg13.innerHTML = 'Your answer is correct!'
        } else {
            myMsg13.innerHTML = 'Your answer is incorrect.'
        }
        //fourteenth question
        var guardian = document.q1.guardian.value;
        var myMsg14 = document.getElementById('myMsg14');
        if (guardian == "Mokona") {
            myMsg14.innerHTML = 'Your answer is correct!'
        } else {
            myMsg14.innerHTML = 'Your answer is incorrect.'
        }
        //fifteenth question
        var rejection = document.q1.rejection.value;
        var myMsg15 = document.getElementById('myMsg15');
        if (rejection == "reject") {
            myMsg15.innerHTML = 'Your answer is correct!'
        } else {
            myMsg15.innerHTML = 'Your answer is incorrect.'
        }
        //sixteenth question
        var HK = document.q1.HK.value;
        var myMsg16 = document.getElementById('myMsg16');
        if (HK == "Hong Kong") {
            myMsg16.innerHTML = 'Your answer is correct!'
        } else {
            myMsg16.innerHTML = 'Your answer is incorrect.'
        }
        //seventeenth question
        var nickname = document.q1.nickname.value;
        var myMsg17 = document.getElementById('myMsg17');
        if (nickname == "Snow Rabbit") {
            myMsg17.innerHTML = 'Your answer is correct!'
        } else {
            myMsg17.innerHTML = 'Your answer is incorrect.'
        }
        //eighteenth question
        var cardAnime = document.q1.cardAnime.value;
        var myMsg18 = document.getElementById('myMsg18');
        if (cardAnime == "All") {
            myMsg18.innerHTML = 'Your answer is correct!'
        } else {
            myMsg18.innerHTML = 'Your answer is incorrect.'
        }
        //nineteenth question
        var pair = document.q1.pair.value;
        var myMsg19 = document.getElementById('myMsg19');
        if (pair == "L_D") {
            myMsg19.innerHTML = 'Your answer is correct!'
        } else {
            myMsg19.innerHTML = 'Your answer is incorrect.'
        }
        //twentieth question
        var fortune = document.q1.fortune.value;
        var myMsg20 = document.getElementById('myMsg20');
        if (fortune == "Mirror") {
            myMsg20.innerHTML = 'Your answer is correct!'
        } else {
            myMsg20.innerHTML = 'Your answer is incorrect.'
        }

        return false;

    }
});