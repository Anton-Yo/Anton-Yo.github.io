$(document).ready(function() { 


    let pingSound = document.createElement('audio');
    pingSound.setAttribute('src', 'Audio/ping.wav');

    let ambientSound = document.createElement('audio');
    ambientSound.setAttribute('src', 'Audio/AmbientShip.mp3');
    ambientSound.loop = true;
    ambientSound.volume = 0.3;
    
    let creakSound = document.createElement('audio');
    creakSound.setAttribute('src', 'Audio/creak.wav');

    checkForPrevious();

    if(localStorage.getItem("play")) {
        ambientSound.play(); 
       
        let random = Math.random() * 60;
        ambientSound.currentTime = random;  
    }


    $('#dialogueBox, #dialogueBoxInterview').click( function() {
        pingSound.currentTime = 0;
        pingSound.play();
    });

    $('#startButton').click( function() {
        pingSound.play();
        localStorage.setItem("play", true);
    })

    // $('.door, .pirate').click( function() {
    //     if($(this).hasClass("pirate")) {
    //         console.log("pirate clicked");
    //         localStorage.setItem("playPing", true)
    //     } else {
    //         localStorage.setItem("playCreak", true)
    //     }
    // }); 

    $('.storeroom-item').on("click", function() {
        pingSound.currentTime = 0;
        pingSound.play();
    }); 

    function checkForPrevious() {
        
        // console.log(localStorage.getItem("playPing"));

        // if(localStorage.getItem("playPing")) {
        //     pingSound.play();
        //     localStorage.setItem("playPing", false)
        // } else {
        //     creakSound.play();
        // }

        
        // if(localStorage.getItem("playCreak")) {
            
           
        // }


    }
});