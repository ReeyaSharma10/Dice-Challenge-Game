
//Created a function that will work on every click
function suffle(){
    // get random number and storing that value in a variable
    
    // storing constant value in player1 
    const play1 = Math.floor(Math.random() *6) +1;   
    
    // updating image with random number
    const play1dice = `assets/dice${play1}.png`;    
    
    //changing images by random number
    document.getElementById('check1').setAttribute('src',play1dice); 

    // suffling number for player 2 as well 
    const play2 = Math.floor(Math.random() *6) +1;
    const play2dice = `assets/dice${play2}.png`;
    document.getElementById('check2').setAttribute('src',play2dice);


    // printing Final Result
    
    if(play1> play2){
        // Selecting the query and replacing there Attribute
        document.querySelector('h1').innerHTML="Player -One- Won!!!!"
    }
    else if(play1< play2){
        document.querySelector('h1').innerHTML="Player --Two-- Won!!!!"
    }
    else{
        // if both player get same value then no one will bw the winner
        document.querySelector('h1').innerHTML="Match Draw  ;)"
    }
}
