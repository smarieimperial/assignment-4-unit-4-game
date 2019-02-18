        
        var wins = 0;
    	var losses = 0;
        var total = 0;

        var arrayWins = [];  //array to hold wins and to push wins to
        var arrayLosses = [];  //array to hold losses and to push losses to

        $('#wins').text(wins);  // using jquery prints the number 0 to screen
        $('#losses').text(losses);  // using jquery prints the number 0 to screen
        $('#totalScore').text(total);  // using jquery prints the number 0 to screen
 
        //this CODE below WORKS ~ prints random number to pink box to begin game
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; // print to screen a random number in a box for example 33 that
        //the player has to reach. Random number to be between 19 and 120.
        }
        // prints out the number to the document
        var randomNumber = getRandomIntInclusive(19, 120);
        document.querySelector('#randomNumber').innerText = randomNumber;
        
        // resets to counter 'total' back to the number 0
        function zero() {
            total = 0;
        }

        function game() {
            // generates a random number to appear in pink box when the player
            // either wins or loses. At same time it resets the counter, 'total' back
            // to number 0.
            if (losses > 0) {
                    var randomNumber = getRandomIntInclusive(19, 120);
                    document.querySelector('#randomNumber').innerText = randomNumber;
                    zero();

                } else if (wins > 0) {
                    var randomNumber = getRandomIntInclusive(19, 120);
                    document.querySelector('#randomNumber').innerText = randomNumber;
                    zero();
                }
        }
   
//==============================================
        // red gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var red = clicked;
        $('#redgem').on('click', function() {
            console.log(red);
            total = total + red;
            document.querySelector('#totalScore').innerText = total;  
            youlose();
            youwin();
});
        // yellow gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var yellow = clicked;
        $('#yellowgem').on('click', function() {
            console.log(yellow);
            total = total + yellow;
            document.querySelector('#totalScore').innerText = total; 
            youlose();
            youwin();
});
        // green gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var green = clicked;
        $('#greengem').on('click', function() {
            console.log(green); 
            document.querySelector('#totalScore').innerText = total; 
            total = total + green;
            youlose();
            youwin();
});
        // purple gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var purple = clicked;
        $('#purplegem').on('click', function() {
            console.log(purple);
            document.querySelector('#totalScore').innerText = total; 
            total = total + purple;
            youlose();
            youwin();
    });
// =============================================
    // decides if player wins 
    function youwin() {
        var num= 0;
            if (total == randomNumber) {   
            document.querySelector('#updateMe').innerText = ('You Win!');
            wins++;
            document.querySelector('#wins').innerText = wins; 
            $('#totalScore').text(num); 
            zero();
            game();
        }
    }
// ==============================================
    // decides if player loses
    function youlose() {
        var num  = 0;
        if (total > randomNumber) {
             document.querySelector('#update').innerText = ('You lose!');
             losses++;
             document.querySelector('#losses').innerText = losses;    
             $('#totalScore').text(num);      
              zero();   
              game();    
                
        }     
    }

   