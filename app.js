var clickSquare = document.querySelectorAll(".square");
var turn = 0;
var sq1 = document.querySelector("#sq1");
var sq2 = document.querySelector("#sq2");
var sq3 = document.querySelector("#sq3");
var sq4 = document.querySelector("#sq4");
var sq5 = document.querySelector("#sq5");
var sq6 = document.querySelector("#sq6");
var sq7 = document.querySelector("#sq7");
var sq8 = document.querySelector("#sq8");
var sq9 = document.querySelector("#sq9");
var xMove = [];
var oMove = [];
var xWins = 0;
var oWins = 0;
var counter = 9;

for(i=0; i<clickSquare.length; i++) {
	clickSquare[i].addEventListener('click', function(){
      if (turn % 2 === 0) {
        this.style.backgroundImage="url('http://images.sodahead.com/polls/002833709/116763421_redpill_answer_2_xlarge.png')";
        this.style.backgroundSize="cover";
				this.innerHTML="X";
        console.log('dhdjdhjh');
        turn++;
        xMove.push(this);
        console.log(xMove);
        winner();
      }else {
				this.style.backgroundImage="url('https://img.4plebs.org/boards/pol/image/1435/44/1435448258134.png')";
				this.style.backgroundSize="cover";
				this.innerHTML='O'
        console.log("O");
        oMove.push(this);
        console.log(oMove);
        turn++;
        winner();
      }

    });

}
function winner(xMove,oMove){
               if(sq1.innerHTML === "X" && sq2.innerHTML === "X" && sq3.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq1.innerHTML === "X" && sq5.innerHTML === "X" && sq9.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq3.innerHTML === "X" && sq5.innerHTML === "X" && sq7.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq4.innerHTML === "X" && sq5.innerHTML === "X" && sq6.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq7.innerHTML === "X" && sq8.innerHTML === "X" && sq9.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq1.innerHTML === "X" && sq4.innerHTML === "X" && sq7.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq2.innerHTML === "X" && sq5.innerHTML === "X" && sq8.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq3.innerHTML === "X" && sq6.innerHTML === "X" && sq9.innerHTML === "X") {
                   victory();
                   console.log('Winner');
               }
               else if(sq1.innerHTML == "O" && sq2.innerHTML == "O" && sq3.innerHTML == "O") {
                   defeat();
                   console.log('Loser');
               }
               else if(sq1.innerHTML == "O" && sq5.innerHTML == "O" && sq9.innerHTML == "O") {
                   victory();
                   console.log('Winner');
               }
               else if(sq3.innerHTML == "O" && sq5.innerHTML == "O" && sq7.innerHTML == "O") {
                   defeat();
                   console.log('Winner');
               }
               else if(sq4.innerHTML == "O" && sq5.innerHTML == "O" && sq6.innerHTML == "O") {
                   defeat();
               }
               else if(sq7.innerHTML == "O" && sq8.innerHTML == "O" && sq9.innerHTML == "O") {
                   defeat();
               }
               else if(sq1.innerHTML == "O" && sq4.innerHTML == "O" && sq7.innerHTML == "O") {
                   defeat();
               }
               else if(sq2.innerHTML == "O" && sq5.innerHTML == "O" && sq8.innerHTML == "O") {
                   defeat();
               }
               else if(sq3.innerHTML == "O" && sq6.innerHTML == "O" && sq9.innerHTML == "O") {
                   defeat();
              }

}

function victory(xMove){
 console.log("You have chosen the Red Pill");
alert('Red Pill Wins.');

}

function defeat(oMove){
 console.log("O Wins");
alert('Blue Pill Wins.');

}
