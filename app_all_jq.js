
var counter = 0;

$(function(){

$('.square').click(function(){
  counter++;
	row1 = $('#sq1').text() + $('#sq2').text() + $('#sq3').text();
	row2 = $('#sq4').text() + $('#sq5').text() + $('#sq6').text();
	row3 = $('#sq7').text() + $('#sq8').text() + $('#sq9').text();
	column1 = $('#sq1').text() + $('#sq4').text() + $('#sq7').text();
	column2 = $('#sq2').text() + $('#sq5').text() + $('#sq8').text();
	column3 = $('#sq3').text() + $('#sq6').text() + $('#sq9').text();
	across1 = $('#sq1').text() + $('#sq5').text() + $('#sq9').text();
	across2 = $('#sq3').text() + $('#sq5').text() + $('#sq7').text();

if (counter % 2===0 ){
	$(this).text('o');
}
else {
	$(this).text('x');
}

if (row1 == 'xxx' || row1== 'ooo'){declareWinner(row1)}
else if (row2 == 'xxx' || row2== 'ooo'){declareWinner(row2)}
else if (row3 == 'xxx' || row3== 'ooo'){declareWinner(row3)}
else if (column1 == 'xxx' || column1== 'ooo'){declareWinner(column1)}
else if (column2 == 'xxx' || column2== 'ooo'){declareWinner(column2)}
else if (column3 == 'xxx' || column3== 'ooo'){declareWinner(column3)}
else if (across1 == 'xxx' || across1== 'ooo'){declareWinner(across1)}
else if (across2 == 'xxx' || across2== 'ooo'){declareWinner(across2)}
else if (counter == 9) {
	$('#.winner').text("It's a Tie");
}

function declareWinner(theWinner){
theWinner = theWinner.substring(2);
$('#winner').text(theWinner);
}

});
});
