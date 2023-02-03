img = "";
status = "";
objects = [];

function preload()
{
img = loadImage('Home5.jpg');
}

function setup()
{
canvas=createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 420);
    if(status !="")
    {
        for(i=0; 1 < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detector";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].y);
            noFill();
            storke('#FF0000');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,);

        }
    }
    //fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 278, 320);//
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results; 
}