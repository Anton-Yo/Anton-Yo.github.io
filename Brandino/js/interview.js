$(document).ready(function() { 

    let dialogueState = 0;
    let questionClicked = false;
    let dialogueArray = [];
    let currentQuestion;
    let suspect;
    let name = localStorage.getItem("name");

    const Interviewee = {
        Cook: "Cook",
        Gunner: "Gunner",
        FirstMate: "FirstMate"
    }

    identifySuspect();
    checkInterviewHistory();
    $("#character").html(name);

    function identifySuspect() { //set the enum with the correct suspect
        suspect = document.getElementById("identifier").textContent;
      
        if(suspect == "The Cook") {
            suspect = Interviewee.Cook;
          
        }

        if(suspect == "The Gunner") {
            suspect = Interviewee.Gunner;
        }

        if(suspect == "The First Mate") {
            suspect = Interviewee.FirstMate;
        }
    }

    function checkInterviewHistory() { //change question colour based on history
        
        if(suspect == Interviewee.Cook && localStorage.getItem("CookVisited") == "true") {
            $("#interviewBubble").html("Back so soon??");
            
            for(let i = 0; i <= 3; i++) {
                if(localStorage.getItem("Q" + i + "-Cook")) {
                    $(".interview-question"+ i).css("color", "rgb(96,96,96)");
                }
            }

        }

        if(suspect == Interviewee.Gunner && localStorage.getItem("GunnerVisited") == "true") {
            $("#interviewBubble").html("Back so soon??");

            for(let i = 0; i <= 3; i++) {
                if(localStorage.getItem("Q" + i + "-Gunner")) {
                    $(".interview-question"+ i).css("color", "rgb(96,96,96)");
                }
            }


        }

        if(suspect == Interviewee.FirstMate && localStorage.getItem("FMVisited") == "true") {
            $("#interviewBubble").html("Back so soon??");

            for(let i = 0; i <= 3; i++) {
                if(localStorage.getItem("Q" + i + "-FirstMate")) {
                    $(".interview-question"+ i).css("color", "rgb(96,96,96)");
                }
            }

        }
    }


    

    $("#text").hide();
    // $(".interview-questions").css("color", "gray");

    function addNull() { //add finisher null value to array
        dialogueArray[dialogueArray.length] = null; 
    }

    $('div#dialogueBoxInterview').click(function() { //update dialogue box when clicked with new dialogue
        if(questionClicked) {
            dialogue();
        }
    })

    function dialogue() {
    
    if(dialogueArray[dialogueState] != null) { //loops through dialogue text until reach end of array 
        $('#text').html(dialogueArray[dialogueState]);

        switch (suspect) {

            case Interviewee.Cook:
              $("#character").html("The Cook");
            break;

            case Interviewee.Gunner:
                $("#character").html("The Gunner");
            break;
            
            case Interviewee.FirstMate:
                $("#character").html("The First Mate");
            break;
        }

        dialogueState++;
    } else {
        $("." + currentQuestion).css("color", "rgb(96,96,96)");
        $("#character").html(name);

        $("#text").fadeOut(100, function() {
            $(".interview-questions").fadeIn(300);
        });
        
        dialogueState = 0;
        dialogueArray.length = 0;
    };

    // console.log(dialogueState + "   " + dialogueArray.length);
    };


    $(".interview-question1").click(function() {
        questionClicked = true;
        currentQuestion = "interview-question1";
        // console.log("Test" + suspect);
        localStorage.setItem("Q1-" + suspect, true);

        switch (suspect) {

            case Interviewee.Cook:
                dialogueArray[0] = "I was busy cooking food for the crew last night as per usual whenever theres a big celebration";
                dialogueArray[1] = "I didnt see anything ya know";
                dialogueArray[2] = "Everything is a blur, I'd like to see anyone else on this ship cook food for 90 people. It's not exactly an easy job ";
            break;

            case Interviewee.Gunner:
                console.log("Gunner");
                dialogueArray[0] = "After the celebrations, I went and inspected the ships cannons and polished my gun collection alone";
                dialogueArray[1] = "Gotta be prepared for any eventuality to fight back and look good doing it.";
            break;
            
            case Interviewee.FirstMate:
                console.log("The FirstMate");
                dialogueArray[0] = "I was checking on the crew members as I do every night";
                dialogueArray[1] = "Gotta make sure everyone is doing their thing even if its a celebration";
            break;

         
        }

       
        addNull();
        fadeInText();
        
    })

    $(".interview-question2").click(function() {
        questionClicked = true;
        currentQuestion = "interview-question2";
        localStorage.setItem("Q2-" + suspect, true);

        switch (suspect) {

            case Interviewee.Cook:
                console.log("The cook")
                dialogueArray[0] = "That bastard would always sneak into the damn kitchen and steal the food";
                dialogueArray[1] = "But I couldn't do anything about it because... well is this off the record?";
                dialogueArray[2] = "He saw me putting rat into the stew and threatened to tell the captain unless I kept letting him take extra food";
                dialogueArray[3] = "I mean, blackmail is just the worse. Doesn't mean I killed him though, I just think he was rotten pirate";
            break;

            case Interviewee.Gunner:
                dialogueArray[0] = "Aye, he often helped with the cannons and asked for shooting lessons";
                dialogueArray[1] = "I always used to help him with that, until I started to notice that my previous belongings started to disappear around that same time";
                dialogueArray[2] = "I started asking around and turns out, this was a normal story. He always got close to people and then stole their stuff. A true pirate to his core"
                dialogueArray[3] = "Well, even if I was the sucker at the time, he is not getting any more loot anytime soon haha"
           
            break;
            
            case Interviewee.FirstMate:
                dialogueArray[0] = "I heard he was a bit of a rascal, but a solid crew member and did his work";
                dialogueArray[1] = "Didn't really hang out much though";
            break;

        }
        
        
        addNull();
        fadeInText();
    })

    $(".interview-question3").click(function() {
        questionClicked = true;
        currentQuestion = "interview-question3";
        localStorage.setItem("Q3-" + suspect, true);

        switch (suspect) {

            case Interviewee.Cook:
                dialogueArray[0] = "Its the damn gunner I say";
                dialogueArray[1] = "He was always in here boasting about how hes been stealing jewellery and coins from her and everyone on this ship. The Gunner especially of late.";
                dialogueArray[2] = "I bet she finally found him out and stole the key to the treasure to make up for all she lost";
            break;

            case Interviewee.Gunner:
                dialogueArray[0] = "Ay, who knows, probably the First Mate";
                dialogueArray[1] = "He's always rubbed me the wrong way. He's always smiling and ordering people around, but sometimes he'll sneer at people behind their back";
                dialogueArray[2] = "Dunno why that is, maybe that's for you to find out ay?";
            break;
            
            case Interviewee.FirstMate:
                dialogueArray[0] = "The only person who was supposed to see Flynn the guard last night was the cook. He always goes to deliver food to Flynn at the storeroom personally. Although I doubt he would mention that considering what happened last night ";
                dialogueArray[1] = "They always seem to be hanging out in the kitchen and everything as well";
                dialogueArray[2] = "Maybe the cook finally got fed up with him. I wouldn't want to hang out with Flynn for that long";
            break;
        }
        addNull();
        fadeInText();

    })

    function fadeInText() {
        $('.interview-questions').fadeOut(200, function() {
            $("#text").fadeIn(200);
        });
    };

    $("#backButton").on("click", function () {

        switch (suspect) {

            case Interviewee.Cook:
                localStorage.setItem("CookVisited", true);
                window.location = "SecondFloor.html";
            break;

            case Interviewee.Gunner:
                localStorage.setItem("GunnerVisited", true);
                window.location = "FirstFloor.html";
            break;
            
            case Interviewee.FirstMate:
                localStorage.setItem("FMVisited", true);
                window.location = "FirstFloor.html";
            break;
        }
    })

});