/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gameplaying, sixcount, lastdice, winscore

init()



document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gameplaying){
		dice1 = Math.floor(Math.random() * 6) + 1
		dice2 = Math.floor(Math.random() * 6) + 1
		if (dice1 === 1 || dice2 === 1){
			lastdice = 0
		    nextPlayer()
		}
		   else if (dice1 !== 1 && dice2 !== 1){
		
			roundScore+= dice1 + dice2
		    var diceDOM1 = document.querySelector("#dice-1")
		    var diceDOM2 = document.querySelector("#dice-2")
		    diceDOM1.style.display = 'block'
		    diceDOM1.src= 'dice-'+dice1+'.png'
		    diceDOM2.style.display = 'block'
		    diceDOM2.src= 'dice-'+dice2+'.png'
		    document.querySelector('#current-'+activePlayer).textContent = roundScore
			lastdice = dice	
			//console.log(lastdice)
		
	}
		else {
			//console.log(dice)
		nextPlayer()

	}
		}
	
		
	

	})

// For single dice with the challenge

// document.querySelector('.btn-roll').addEventListener('click', function(){
// 	if (gameplaying){
// 		dice = Math.floor(Math.random() * 6) + 1
// 		if (lastdice === 6 && dice ===6){
// 			lastdice = 0
// 		    scores[activePlayer] = 0
// 		    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]
// 		    nextPlayer()
// 		}
// 		   else if (dice !== 1){
		
// 			roundScore+= dice
// 		    var diceDOM = document.querySelector('.dice')
// 		    diceDOM.style.display = 'block'
// 		    diceDOM.src= 'dice-'+dice+'.png'
// 		    document.querySelector('#current-'+activePlayer).textContent = roundScore
// 			lastdice = dice	
// 			//console.log(lastdice)
		
// 	}
// 		else {
// 			//console.log(dice)
// 		nextPlayer()

// 	}
// 		}
	
		
	

// 	})


document.querySelector('.btn-hold').addEventListener('click', function(){
	    
	    if (gameplaying){
	       scores[activePlayer]+= roundScore
		   document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]
		   
		   var input = document.querySelector('.final-score').value
		   var winningscore
		   if (input)
		   {
		   	  winningscore = input
		   }
		   else
		   {
		   	winningscore = 100
		   }

		   if(scores[activePlayer] >= winningscore)
		   {
	 	   document.querySelector('.player-0-panel').classList.remove('active')
      	   document.querySelector('.player-1-panel').classList.remove('active')	
      	   document.querySelector('.player-0-panel').classList.remove('winner')	
      	   document.querySelector('.player-1-panel').classList.remove('winner')	
      	   document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
      	   document.querySelector('#name-'+activePlayer).textContent='Winner!'
     	   gameplaying = false
    	}
   		 else
		 nextPlayer()

	}
	    }
	

	)


document.querySelector('.btn-new').addEventListener('click', init)
function nextPlayer(){
  
  document.querySelector('#current-'+activePlayer).textContent = '0'
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('#dice-1').style.display = 'none'
  document.querySelector('#dice-2').style.display = 'none'
  roundScore = 0
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
}



function init(){

  scores = [0,0]
  roundScore = 0
  activePlayer = 0
  gameplaying = true
  lastdice = 0

  document.querySelector('#score-0').textContent = '0'
  document.querySelector('#score-1').textContent = '0'
  document.querySelector('#current-0').textContent = '0'
  document.querySelector('#current-1').textContent = '0'
  document.querySelector('#dice-1').style.display = 'none'
  document.querySelector('#dice-2').style.display = 'none'
  document.querySelector('#name-0').textContent = 'Player 1'
  document.querySelector('#name-1').textContent = 'Player 2'
}



