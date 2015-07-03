
var counter = 0;

$(function(){

$('.square').click(function(){
  counter++;
	row1 = $('#sq1').html() + $('#sq2').html() + $('#sq3').html();
	row2 = $('#sq4').html() + $('#sq5').html() + $('#sq6').html();
	row3 = $('#sq7').html() + $('#sq8').html() + $('#sq9').html();
	column1 = $('#sq1').html() + $('#sq4').html() + $('#sq7').html();
	column2 = $('#sq2').html() + $('#sq5').html() + $('#sq8').html();
	column3 = $('#sq3').html() + $('#sq6').html() + $('#sq9').html();
	across1 = $('#sq1').html() + $('#sq5').html() + $('#sq9').html();
	across2 = $('#sq3').html() + $('#sq5').html() + $('#sq7').html();

if (counter % 2==0 ){
	$(this).html('o');
}
else {
	$(this).html('x');
}

if (row1 == 'xxx' || row1== 'ooo'){declareWinner(row1)}
if (row2 == 'xxx' || row2== 'ooo'){declareWinner(row2)};
if (row3 == 'xxx' || row3== 'ooo'){declareWinner(row3)};
if (column1 == 'xxx' || column1== 'ooo'){declareWinner(column1)}
if (column2 == 'xxx' || column2== 'ooo'){declareWinner(column2)};
if (column3 == 'xxx' || column3== 'ooo'){declareWinner(column3)};
if (across1 == 'xxx' || across1== 'ooo'){declareWinner(across1)};
if (across2 == 'xxx' || across2== 'ooo'){declareWinner(across2)};
else if (counter == 9) {
	$('#.winner').html("It's a Tie")
}

function declareWinner(theWinner){
theWinner= theWinner.substring(2);

$('#winner').html(theWinner)
}


});


});






















});
