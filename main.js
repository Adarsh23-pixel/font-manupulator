function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(350,350);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw() {
    background(12, 236, 247);
}
function ModelLoaded() {
    console.log('PoseNet is intilize');


}
function gotPoses(results) {
if(results.length> 0){console.log(results)}
}

