let frontArea = document.getElementById('front-area');
let gameArea = document.getElementById('game-area');
let newGameBtn = document.getElementById('new-game-btn');
let showResult = document.getElementById('show-result');
let cpu;
let userGuess=[];
const init=()=>{
    cpu = Math.floor(Math.random()*100);
    console.log(cpu)
    gameArea.style.display = 'none'
    newGameBtn.style.display='none'
    document.getElementById('restart').style.display='none'
}


const startGame=()=>{
    gameArea.style.display = 'block'
    frontArea.style.display='none'
    document.getElementById('restart').style.display='block'
}

const reload=()=>{
    location.reload();
}


// Main logic of game
const compareGuess=()=>{
    let userNumber = Number(document.getElementById('input-field').value);
    
    document.getElementById('guesses').style.color = '#f5f5f5';

    //Check guess

    if(userGuess.length<maxGuess-1){
        if(userNumber>cpu){
            if(userNumber<0 || userNumber>100){
            showResult.innerHTML=`Enter the Number between 1 to 100 😎`
            document.getElementById('input-field').value = '';
    
            }
            else{
                userGuess = [... userGuess, userNumber];
                document.getElementById('guesses').innerHTML = userGuess
                showResult.innerHTML=`Your Guess is High 😮`
                newGameBtn.style.display='none'
                document.getElementById('input-field').value = '';
            }
            
    
        }
        else if(userNumber<cpu){
            if(userNumber<0 || userNumber>100){
                showResult.innerHTML=`Enter the Number between 1 to 100 😎`
                document.getElementById('input-field').value = '';
    
            }
            else{
                userGuess = [... userGuess, userNumber];
                document.getElementById('guesses').innerHTML = userGuess
                showResult.innerHTML=`Your Guess is Low 😐`
                newGameBtn.style.display='none'
                document.getElementById('input-field').value = '';
                
            }
        }
        else{
            showResult.innerHTML=`Congrats! Your Guess was ${userNumber} 🤩`
            newGameBtn.style.display='block'
            document.getElementById('guess-img').style.display='none'
            document.getElementById('input-field').setAttribute('disabled','true')
            document.getElementById('input-field').value = '';
            
        }
        document.getElementById('attempts').innerHTML=userGuess.length;
        document.getElementById('attempts').style.color='#f5f5f5';
    }
    else{
        if(userNumber>cpu || userNumber<cpu){
                userGuess = [... userGuess, userNumber];
                document.getElementById('guesses').innerHTML = userGuess
                showResult.innerHTML=`Your loose! Correct number was ${cpu}😌`;
                document.getElementById('guess-img').style.display='none'
                newGameBtn.style.display='block'
                document.getElementById('input-field').setAttribute('disabled','true')
                document.getElementById('input-field').value = '';


        }
        else{
            showResult.innerHTML=`Congrats! Your Guess was ${userNumber} 🤩`
            newGameBtn.style.display='block'
            document.getElementById('guess-img').style.display='none'
            document.getElementById('input-field').setAttribute('disabled','true')
            document.getElementById('input-field').value = '';
            
        }
        document.getElementById('attempts').innerHTML=userGuess.length;
        document.getElementById('attempts').style.color='#f5f5f5';
    }
    }
    
const easyMode=()=>{
    maxGuess=10;
    startGame();
}
const hardMode=()=>{
    maxGuess=5
    startGame();
}
