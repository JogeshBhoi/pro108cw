var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

console.log(event);

var Content = event.result[0][0].transcript;
console.log(Content);
   speak();

document.getElementById("textbox").innerHTML = Content;
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds"

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera)

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    Height:250,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    }
    )
}

function setTimeOutButton() {
    
    setTimeout(
        function(){
            alert("set TimeOut Button 3000");
        }
    )
}