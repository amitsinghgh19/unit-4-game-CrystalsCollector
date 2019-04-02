

//--Creating global variables--//

var RandomNummber=[];
var x=19;
var y=120;
var Wins=0;
var Losses=0;
var TotalScore=0;
var redCrystalRanNum=[];
var blueCrystalRanNum=[];
var yellowCrystalRanNum=[];
var greenCrystalRanNum=[];
var xc=1;
var yc=12;

//***starting the game from here***//
function startGame(){
    //pick any random number between 19 - 120
    RandomNummber=Math.floor(Math.random() * ((y-x)+1) + x);
    console.log("Random Nummber is: "+RandomNummber);
    $('#ranNum').text(RandomNummber);

    //***get random number of red crystal***//
    redCrystalRanNum=Math.floor(Math.random() * ((yc-xc)+1) + xc);
    console.log("Red Crystal Redandom Nummber is: "+redCrystalRanNum);

    //***get random number of blue crystal***//
    blueCrystalRanNum=Math.floor(Math.random() * ((yc-xc)+1) + xc);
    console.log("Blue Crystal Redandom Nummber is: "+blueCrystalRanNum);

    //***get random number of yellow crystal***//
    yellowCrystalRanNum=Math.floor(Math.random() * ((yc-xc)+1) + xc);
    console.log("Yellow Crystal Redandom Nummber is: "+yellowCrystalRanNum);
    
    //***get random number of green crystal***//
    greenCrystalRanNum=Math.floor(Math.random() * ((yc-xc)+1) + xc);
    console.log("Green Crystal Redandom Nummber is: "+greenCrystalRanNum);
   
}
    //*** keep adding and display numbers to total score when a crystal button is pressed***//
    $('#imgBtnR').click(function(){
        $('#totScore').text(redCrystalRanNum);
        TotalScore=TotalScore+redCrystalRanNum;
        $('#totScore').text(TotalScore);
        win_loose();
    })
    
    $('#imgBtnB').click(function(){
        $('#totScore').text(blueCrystalRanNum);
        TotalScore=TotalScore+blueCrystalRanNum;
        $('#totScore').text(TotalScore);
        win_loose();
    })

    $('#imgBtnY').click(function(){
        $('#totScore').text(yellowCrystalRanNum);
        TotalScore=TotalScore+yellowCrystalRanNum;
        $('#totScore').text(TotalScore);
        win_loose();
    })

    $('#imgBtnG').click(function(){
        $('#totScore').text(greenCrystalRanNum);
        TotalScore=TotalScore+greenCrystalRanNum;
        $('#totScore').text(TotalScore);
        win_loose();
    })


    //*** verify-if toltal score is equals to or more then random number.***//
    //*** verify-if toltal score is equals to or random number then player  wins and if its more the the random number then player looses.***//
    function win_loose()
    {
       if(TotalScore === RandomNummber)
       {
    
            $('#wonMsg').text("-You Won!"); 
            Wins++;
            $('#addWin').text(Wins); 
            playAgain();
            $('#totScore').text('0'); 
            setTimeout(function() {
                $('#wonMsg').text(""); 
            }, 2000);
           
            
       }
       else if(TotalScore > RandomNummber) 
       {
    
            $('#lostMsg').text("-You Lost!"); 
            Losses++;
            $('#addLost').text(Losses); 
            playAgain();
            $('#totScore').text('0'); 
            setTimeout(function() {
                $('#lostMsg').text(""); 
            }, 2000);
            
           
       } 
       else
       {
            console.log("Keep playing. Total score is still less then the random number.");
       }
    }

    function playAgain(){
        //***Set the variables to default and pick the random number again.***//
        RandomNummber=[];
        x=19;
        y=120;
        // Wins=0;
        // Losses=0;
        TotalScore=0;
        redCrystalRanNum=[];
        blueCrystalRanNum=[];
        yellowCrystalRanNum=[];
        greenCrystalRanNum=[];
        xc=1;
        yc=12;
        startGame();

    }

    startGame();