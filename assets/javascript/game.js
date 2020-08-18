        
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
        // white gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var white = clicked;
        $('#whitegem').on('click', function() {
            console.log(white);
            total = total + white;
            document.querySelector('#totalScore').innerText = total;  
            youlose();
            youwin();
});
        // clear gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var clear = clicked;
        $('#cleargem').on('click', function() {
            console.log(clear);
            total = total + clear;
            document.querySelector('#totalScore').innerText = total; 
            youlose();
            youwin();
});
        // blue gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var blue = clicked;
        $('#bluegem').on('click', function() {
            console.log(blue); 
            document.querySelector('#totalScore').innerText = total; 
            total = total + blue;
            youlose();
            youwin();
});
        // sparkle gem... when clicked...
    var clicked = Math.ceil(Math.random()*12);
    var sparkle = clicked;
        $('#sparklegem').on('click', function() {
            console.log(sparkle);
            document.querySelector('#totalScore').innerText = total; 
            total = total + sparkle;
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

   