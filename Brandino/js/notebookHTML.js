$(document).ready(function() { 

    $('#menuStuff').prepend(
    
    `<div id='notebookButton'> 
    <button class='roboto'> Notebook </button>
        </div>
        <div id='backButton'>
            <button class='roboto'>Return to previous room</button>
        </div>

        <div id='accuseSuspects'>

            <div class='suspect' id='GunnerSuspect'> 
                <div class="susStyle">     
                    <h3 class='roboto'> Gunner </h3>
                    <img src='Images/Gunner.png'>
                </div>
            </div>  

           
            <div class='suspect' id='FMSuspect'>
                <div class="susStyle"> 
                    <h3 class='roboto'> First Mate </h3>
                    <img style="width: 80%; margin-left: 20px" src='Images/FirstMate.png'>
                </div> 
            </div>

            <div class='suspect' id='CookSuspect'>
                <div class="susStyle"> 
                    <h3 class='roboto'> Cook </h3>
                    <img style="margin-left: 10px" src='Images/cook.png'>
                </div> 
            </div> 

        </div>

        <div id='confirmAccuse'>
            <div class="canvasStyle">
                <div id='warning' class='roboto'> <p> Are you sure you want to do this? Once you accuse you can't go back </p> </div>
                <div id='accuseButtons'> 
                    <button id='stopAccuseButton'> Go Back </button>
                    <button id='confirmAccuseButton'> Confirm </button>
                </div>
            </div>
        </div>
    
        <div id='twoButtons'>
            <button id='NBOpenButton'> Exit the book </button>   
            <button id='accuseButton'> Accuse Suspect </button>  
        </div>   

        <div id='notebook'>
            <div class='page shiftRight'> 
                <div id='pageInfo'>
                    <h3 class='roboto'> Investigation Notebook </h3>
                    <p id='bookInfo' class='roboto'> This is your investigation notebook, where important
                        information will be automatically recorded. If necessary, you can add notes on the right page as well!
                    </p>
                    
                    <div id='NBInfo'> 
                        <h4> The Gunner </h4>
                        <ul class='notebookList'>
                            <li id='S1-1'> <span class='bold'> Whereabouts: </span> Unknown -> try interviewing the suspect? </li>
                            <li id='S1-2'> <span class='bold'> Relationship: </span> Unknown -> try interviewing the suspect?  </li>
                            <li id='S1-3'> <span class='bold'> Suspicions: </span> Unknown -> try interviewing the suspect?  </li>
                        </ul>
    
                        <h4> The First Mate </h4>
                        <ul class='notebookList'>
                            <li id='S2-1'> <span class='bold'> Whereabouts: </span> Unknown -> try interviewing the suspect? </li>
                            <li id='S2-2'> <span class='bold'> Relationship: </span> Unknown -> try interviewing the suspect? </li>
                            <li id='S2-3'> <span class='bold'> Suspicions: </span> Unknown -> try interviewing the suspect? </li>
                        </ul>
    
                        <h4> The Cook </h4>
                        <ul class='notebookList'>
                            <li id='S3-1'> <span class='bold'> Whereabouts: </span> Unknown -> try interviewing the suspect? </li>
                            <li id='S3-2'> <span class='bold'> Relationship: </span> Unknown -> try interviewing the suspect? </li>
                            <li id='S3-3'> <span class='bold'> Suspicions: </span> Unknown -> try interviewing the suspect? </li>
                        </ul>
                    </div>
                </div>
            </div>
    
            <div class='page shiftLeft'> 
                <div id='pageInfo'> 
                    <h4> Other Clues </h4>
                    <ul class='notebookList'>
                        <li id='MISC-1'> <span class='bold'> Wrestler Pirate: </span> Unknown -> I heard there's an arm wrestling pirate who knows something in the crew hall </li>
                        <li id='MISC-2'> <span class='bold'> Dice Pirate: </span> Unknown -> Roll the dice, see where they will fall </li>
                        <li id='MISC-3'> <span class='bold'> Quiz Pirate: </span> Unknown -> If theres a skeleton pirate doing a quiz, you know its going to be hard </li>
                    </ul>
    
                <div id='notebookInput'>
                    <div id='additionalNotes'>
                        <p id='inputError' style='padding-left: 5px;'> Enter note: </p>
                        <input type='text' id='writing' value=''>
                    </div>
    
                    <div id='submitButton'>
                        <button id='addText'> Submit </button>
                    </div>
                </div>
                    
                <ul id='writeArea'></ul>

                </div>
            </div>
        </div>`


    );

});