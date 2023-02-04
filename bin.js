status = "";
function preload()
{
    img = loadImage("bin.png");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded");
    objectDetector.detect(img, gotResults);
    status = true;
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}