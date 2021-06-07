Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function(snappedimg){
document.getElementById("result").innerHTML = '<img id="img123" src="'+snappedimg+'"/>';
    });
}
console.log("ML5 VERSION: ", ml5.version);
x = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
    console.log("Model loaded");
}
function result(){
    y = document.getElementById("img123");
    x.classify(y, gotresult);
}
function gotresult(error, results){
 if(error){
     console.log(error);
 }
 else{
     console.log(results);
     document.getElementById("object-name").innerHTML = results[0].label;
 }
}