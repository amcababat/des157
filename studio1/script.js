function setup() {
    var myCanvas = createCanvas(800, 250);

    myCanvas.parent('mySketch');
}

function draw() {
background(32, 222, 227);
    noStroke();
    fill(237, 233, 117);
    ellipse(340, 60, 100, 100); //left ear
    ellipse(460, 60, 100, 100); //right ear

    fill(240, 179, 225);
    ellipse(340, 60, 60, 60); //left inner ear
    ellipse(460, 60, 60, 60); //right inner ear

    fill(237, 233, 117); //color of the fur
    ellipse(400, 125, 180, 180); //bear face

    fill(240, 179, 225); //color of nose
    triangle(380, 140, 420, 140, 400, 160); //nose

    fill(209, 116, 161); //color of mouth
    arc(400, 170, 50, 50, radians(0), radians(180)); //mouth of the bear

    //eyes that will follow
    var mx = constrain(mouseX, 425, 450); //constrain for the right eye
    var mx2 = constrain(mouseX, 350, 370); //constrain for the left eye
    var my = constrain(mouseY, 90, 120); //constrain from the eyes going any higher or lower
    ellipse(mx, my, 30, 30); //right eye
    ellipse(mx2, my, 30, 30); //left eye

    //beehives
    stroke(0);
    strokeWeight(1);
    fill(240, 170, 65);
    //top left beehive
    ellipse(40, 41, 25, 10);
    ellipse(40, 35, 35, 15);
    ellipse(40, 30, 40, 15);
    ellipse(40, 25, 35, 15);
    ellipse(40, 20, 25, 10);

    //bottom left beehive
    ellipse(40, 226, 25, 10);
    ellipse(40, 220, 35, 15);
    ellipse(40, 215, 40, 15);
    ellipse(40, 210, 35, 15);
    ellipse(40, 205, 25, 10);

    //bottom right beehive
    ellipse(760, 226, 25, 10);
    ellipse(760, 220, 35, 15);
    ellipse(760, 215, 40, 15);
    ellipse(760, 210, 35, 15);
    ellipse(760, 205, 25, 10);

    //top right beehive
    ellipse(760, 41, 25, 10);
    ellipse(760, 35, 35, 15);
    ellipse(760, 30, 40, 15);
    ellipse(760, 25, 35, 15);
    ellipse(760, 20, 25, 10);

    //function to change the eyes is called anger
    anger(255);
}

function anger(var x) {
    //defines area of top left beehive
    if (mouseX > 0 && (mouseX < 80) && (mouseY > 0) && (mouseY < 80)) {
        var mx = constrain(mouseX, 425, 450); //constrain for the right eye
        var mx2 = constrain(mouseX, 350, 370); //constrain for the left eye
        var my = constrain(mouseY, 90, 120); //constrain from the eyes going any higher or lower
        fill(x, 0, 0);
        noStroke();
        ellipse(mx, my, 30, 30); //right eye
        ellipse(mx2, my, 30, 30); //left eye
    }
    //defines area of bottom left beehive
    if (mouseX > 0 && (mouseX < 80) && (mouseY > 160) && (mouseY < 250)) {
        var mx = constrain(mouseX, 425, 450); //constrain for the right eye
        var mx2 = constrain(mouseX, 350, 370); //constrain for the left eye
        var my = constrain(mouseY, 90, 120); //constrain from the eyes going any higher or lower
        fill(x, 0, 0);
        noStroke();
        ellipse(mx, my, 30, 30); //right eye
        ellipse(mx2, my, 30, 30); //left eye
    }
    //defines area of top right beehive
    if (mouseX > 720 && (mouseX < 800) && (mouseY > 0) && (mouseY < 80)) {
        var mx = constrain(mouseX, 425, 450); //constrain for the right eye
        var mx2 = constrain(mouseX, 350, 370); //constrain for the left eye
        var my = constrain(mouseY, 90, 120); //constrain from the eyes going any higher or lower
        fill(x, 0, 0);
        noStroke();
        ellipse(mx, my, 30, 30); //right eye
        ellipse(mx2, my, 30, 30); //left eye
    }
    //defines area of bottom left beehive
    if (mouseX > 720 && (mouseX < 800) && (mouseY > 160) && (mouseY < 250)) {
        var mx = constrain(mouseX, 425, 450); //constrain for the right eye
        var mx2 = constrain(mouseX, 350, 370); //constrain for the left eye
        var my = constrain(mouseY, 90, 120); //constrain from the eyes going any higher or lower
        fill(x, 0, 0);
        noStroke();
        ellipse(mx, my, 30, 30); //right eye
        ellipse(mx2, my, 30, 30); //left eye
    }
}
