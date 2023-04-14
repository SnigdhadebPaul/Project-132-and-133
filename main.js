Status = "";
object = [];
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status:Detecting objects";

}
img = "";
function preload() {
    


}
function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }


}
function draw() {
    image(video, 0,0,380,380);
    if (Status != "") {
r=random(255);
g=random(255);
b=random(255);
objectdetector.detect(video, gotResults);


        for(i=0;i<object.length;i++)
        {

            document.getElementById("status").innerHTML = "status:object detected";
            document.getElementById("number_of_objects").innerHTML = "number of objects detected are:"+object.length;
            fill(r,g,b);

            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke(r,g,b);
    
            rect(object[i].x, object[i].y, object[i].width, object[i].height);


        }
       
    }




}
