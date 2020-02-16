// Add some header info
// For TM template code

// Video
let video;
let classifier;
let label = 'waiting......'
let modelURL = 'https://teachablemachine.withgoogle.com/models/ztQzVJi8/';
// STEP 1: Load the model!
function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
    createCanvas(640, 520);
    // Create the video
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
    // STEP 2: Start classifying
}

// STEP 2 classify!
function classifyVideo() {

    classifier.classify(video, gotResults);

}


function draw() {
    background(0);

    // Draw the video
    image(video, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(label, width / 2, height - 16);
    // STEP 4: Draw the label
}


// STEP 3: Get the classification!
function gotResults(error, results) {
    if (error) {
        console.log(error);
        return;
    }
    label = (results[0].label);
    classifyVideo();
}