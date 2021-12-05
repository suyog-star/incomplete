function setup() {
    video = createCapture(VIDEO);
     video.size(500,420);
     canvas  
}

function draw() {
    image(video,0,0,500,420);
}