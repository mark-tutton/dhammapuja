
var play = true;

var myAudio = document.getElementById("track");

function onKeyDown(event) {
        switch (event.keyCode) {
            case 32: //SpaceBar
                if (play) {
                    myAudio.pause();
                    play = false;
                } else {
                    myAudio.play();
                    play = true;
                }
                break;
        }
  return false;
}

window.addEventListener("keydown", onKeyDown, false);
