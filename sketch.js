let video;
let classifier;
let label = 'waiting......'
let modelURL = 'https://teachablemachine.withgoogle.com/models/ztQzVJi8/';
function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
    createCanvas(640, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
}

function classifyVideo() {

    classifier.classify(video, gotResults);

}


function draw() {
    background(0);

    image(video, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(label, width / 2, height - 16);
   
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
        return;
    }
    label = (results[0].label);
    classifyVideo();
}
