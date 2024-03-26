$(document).ready(function() {


    let notebookIsUp = false;
    let noteID = 0;
    let maxMsgLength = 70;
    let accused;
    $('#notebook, #twoButtons, #confirmAccuse, #accuseSuspects').hide();
    let numberOfNotes = localStorage.getItem("NumberOfNotes");
   
    handleCurrentState();

    function handleCurrentState() {

    const questionArr = ["Q1-", "Q2-", "Q3-"];
    let resultArr = [false, false, false];
    checkLocalStorage(questionArr, resultArr, "Gunner");
    //suspect 1 -> Gunner

   
    if(resultArr[0]) {
        $("#S1-1").html("<span class='bold'> Whereabouts: </span> Inspected and cleaned guns and was alone");
    }

    if(resultArr[1]) {
        $("#S1-2").html("<span class='bold'> Relationship: </span> Disliked Flynn because she was the lastest victim of Flynn's stealing");
    }

    if(resultArr[2]) {
        $("#S1-3").html("<span class='bold'> Suspicions: </span> First Mate acts differently behind people's backs");
    }

    //suspect 2 -> First Mate

    resultArr = [false, false, false];
    checkLocalStorage(questionArr, resultArr, "FirstMate");

    if(resultArr[0]) {
        $("#S2-1").html("<span class='bold'> Whereabouts: </span> Checking on crew members before everyone headed off to bed");
    }

    if(resultArr[1]) {
        $("#S2-2").html("<span class='bold'> Relationship: </span> Doesn't consort with Flynn much, just ordered him around a little");
    }

    if(resultArr[2]) {
        $("#S2-3").html("<span class='bold'> Suspicions: </span> The cook went to see Flynn last night. He always brings food to him personally");
    }

   
    //suspect 3 -> cook

    resultArr = [false, false, false];
    checkLocalStorage(questionArr, resultArr, "Cook");

    if(resultArr[0]) {
        $("#S3-1").html("<span class='bold'> Whereabouts: </span> Was in the kitchen cooking food for the crew. Everything was a blur");
       
    }

    if(resultArr[1]) {
        $("#S3-2").html("<span class='bold'> Relationship: </span> Disliked Flynn because he blackmailed him");
    }

    if(resultArr[2]) {
        console.log("cok3tereu")
        $("#S3-3").html("<span class='bold'> Suspicions: </span> The Gunner was recently stolen from by Flynn");
    }

    //other clues 
    resultArr = [false, false, false];
    checkLocalStorage(questionArr, resultArr, "Other");

    
    if(resultArr[0]) {
        $("#MISC-1").html("Weapon used for murder was kitchen knife. Gunner only uses guns as weapons");
    }

    if(resultArr[1]) {
        $("#MISC-2").html("First Mate was missing compass this morning. He never goes without it");
    }

    if(resultArr[2]) {
        $("#MISC-3").html("First Mate actually hangs out with Flynn quite a bit");
    }


    //Extra notes 
    for(let i = 0; i < numberOfNotes; i++) { //Goes through local storage and adds them to page  
        
        if(localStorage.getItem("ExtraNote" + i) != null) {
        $("#writeArea").append("<li class='note' id='Note" + i +"'> <p>" + localStorage.getItem("ExtraNote" + i) +"</p> <button class='delButton'>Delete</button>" +'</li>');
        $('.note').find(".delButton").hide();
        }

        noteID++;
    }

    }

    function checkLocalStorage(questionArr, resultArr, char) { //update notebook normal notes to interview progress

        for(let i = 0; i < questionArr.length; i++) {
    
            if(localStorage.getItem(questionArr[i] + char)) {   
                resultArr[i] = true;
            }
        
        }

        return resultArr;

    }



    function updateNotebook() { //fades in/out various notebook features
        
        if(!notebookIsUp) {
            $("#notebook, #twoButtons, #notebookButton").stop();
            $('#notebook, #twoButtons').fadeIn(300);
            $('#notebookButton').fadeOut(300);
            notebookIsUp = true;
        } else {
            $("#notebook, #twoButtons, #notebookButton").stop();
            $('#notebook, #twoButtons').fadeOut(300);
            $('#notebookButton').fadeIn(300);
            notebookIsUp = false;
        }
    };

    $('#notebookButton, #NBOpenButton').click(function() { //closes and opens notebook
        updateNotebook();
    })

    $(document).on("mouseover", ".note", function() {  // Shows the delete button when mouse enters note
        $(this).find(".delButton").show();
    }).on("mouseleave", ".note", function() {
        $(this).find(".delButton").hide();
    });
    
    $(document).on("click", "#accuseButton", function() { //Shows suspects on button click
        $("#accuseSuspects").show();
        console.log("yeah it worked");
    })

    $(document).on("click", ".suspect", function() {    //confirm button for suspects
        accused = $(this).attr("id");
        $("#confirmAccuse").show();
    })

    $(document).on("click", "#stopAccuseButton", function() { //stop accusing and go back to normal
        $("#accuseSuspects, #confirmAccuse").hide();
    })

    $(document).on("click", "#confirmAccuseButton", function(){ //go to last scene
        localStorage.setItem("Accused", accused);
        window.location = "Accused.html";
    })

    $(document).on("click", ".delButton", function() { //Executes when player deletes a note

        let deletedNoteName = $(this).parent().attr('id');
        let deletedNoteID = deletedNoteName.substring(4, 5);
        removeExtraNote(deletedNoteID);
        $(this).parent().remove();
    })

    $(document).on('keydown', function(event) { //can press escape to bring up/close notebook
        if(event.key == "Escape") {
            updateNotebook();
            $("#accuseSuspects, #confirmAccuse").hide();
        }

        if(event.key == "Enter" && document.getElementById("writing").value.length > 0) { //can press enter to submit note
            turnInputIntoNote();
        }
    })

    function addExtraNote(note) { //Adds written note to localStorage and to the current page
    
        $("#writeArea").append("<li class='note' id='Note" + noteID +"'> <p>" +  note +"</p> <button class='delButton'>Delete</button>" +"</li>");

        $("#Note" + noteID).find(".delButton").hide();

        localStorage.setItem("ExtraNote" + noteID, note);
        noteID++;
        localStorage.setItem("NumberOfNotes", noteID);
    }

    function removeExtraNote(index) { //Actually just removes all the notes from extra storage and reformats them
        localStorage.removeItem("ExtraNote" + index);
        
        let noteArr = [];
        numberOfNotes = localStorage.getItem("NumberOfNotes");

        for(let i = 0; i < numberOfNotes; i++) { //Grabs current notes and puts in array
            noteArr[i] = localStorage.getItem("ExtraNote" + i);
        }
        
        console.log("b4 sort " + noteArr);

        noteArr = jQuery.grep(noteArr, function(note) { //sorts array removing nulls/results of nulls
            
            return note != null && note != "undefined";
            
        });
        console.log("after sort " + noteArr);

    

        for(let i = 0; i <= numberOfNotes; i++) { //Removes all notes from local storage
            localStorage.removeItem("ExtraNote" + i);
        }

        // reset for new count
        numberOfNotes = noteArr.length;
        localStorage.setItem("NumberOfNotes", numberOfNotes);
        noteID = 0;
        $("#writeArea").empty();
        // console.log(noteArr);

        for(let i = 0; i < noteArr.length; i++) { //Adds sorted array of old notes again, with updated indices
            console.log(noteArr[i]);
            
            addExtraNote(noteArr[i]);
            
        }
      
    }

    $(document).on({ // highlight suspect when hovered
        mouseenter: function() {
            $(this).addClass('pulse');
           
        },
        mouseleave: function() {
            $(this).removeClass('pulse');
        }
    }, '.suspect');


    function turnInputIntoNote() {  //Adds written note to HTML
        var x = document.getElementById("writing").value;
        if(x.length < maxMsgLength && x.length > 0){ //input must be within character limit
            
  
            $("#inputError").html("Enter note:");
            $("#writing").val("");
            addExtraNote(x);
           
        } else {  //handle any errors with the input
           
            if(x.length > maxMsgLength) {
                $("#inputError").html("Enter note: --Your note is too long");
            }

            if(x.length == 0) {
                $("#inputError").html("Enter note: --Your note is empty");
            }
        }
    }

    $('#addText').click(function(){ 
        turnInputIntoNote();
    })
});
