//Grphics Libary
let marioImgEl = doucment.createElement("img")
MarioImgEl.src = "images/Mario.jpg";

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Draw a line
stroke("blue");
lineWidth(3);
line(100, 200, 300, 100);

// Draw a rectangle
fill("orange");
rect(100, 100, 200, 50, "fill"); 
rect(400, 500, 70, 200, "stroke"); 

//Draw a circle
circle(400, 300, 50, "stroke");

fill("green");
circle(700, 300, 25, "fill");

// Draw a Triangle
triangle (0, 400, 300, 400, 250, 450, "fill")
stroke("purple");
triangle (0, 300, 400, 300, 350, 250, "stroke")

// Draw some text
font("44px Papyrus");
text("Hello", 400, 200, "stroke")

fill("red")
font( "30px Arial")
text("Good MORNING", 400, 100, "fill")

//Draw an ellipse
fill("green");
ellipse(700, 100, 10, 80, 0, "fill");

stroke("orange")
lineWidth(2);
ellipse(700, 500, 150, 25, 0, "stroke")

// Draw an image
let marioImgEl = doucment.createElement("img")
MarioImgEl.src = "images/Mario.jpg";


ctx.drawImage(marioImgeEl, 0, 0, 300, 200);
