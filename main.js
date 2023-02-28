leftWrist_X = 0;
leftWrist_Y = 0;

score_LW = 0

rightWrist_X = 0;
rightWrist_Y = 0;

song = "";

function preload() {
    song = loadSound("audio.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw() {
    function draw() {
        image(video, 0, 0, 600, 500)
        fill('#FF0000')
        stroke('#FF0000')
        if (score_LW>0.2) {
            circle(leftWrist_Y,leftWrist_Y,20)

            in_Number = Number(leftWristY)
            remove_decimal = floor(in_Number)
            volume = remove_decimal / 500
            song.setVolume(volume)
            document.getElementById("volume").innerHTML = "volume" + volume
        }

    }
}

function song_name() {
    song.play()
    song.setVolume(0.5)
    song.rate(1)
}

function modelLoaded() {
    console.log("Congrats! Your model has been loaded successfully!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        score_LW = results[0].pose.keypoints[9].score
        
        rightWrist_Y = results[0].pose.rightWrist.y
        leftWrist_Y = results[0].pose.leftWrist.y

        leftWrist_X = results[0].pose.leftWrist.x
        rightWrist_X = results[0].pose.rightWrist.x
        
    }
}