var curr;
var correct = 0;
var wrong = 0;

var phrases = [
	{ name: "ZO", val: "zero", used: false },
	{ name: "OE", val: "one", used: false },
	{ name: "TO", val: "two", used: false },
	{ name: "TE", val: "three", used: false },
	{ name: "FR", val: "four", used: false },
	{ name: "FE", val: "five", used: false },
	{ name: "SX", val: "six", used: false },
	{ name: "SN", val: "seven", used: false },
	{ name: "ET", val: "eight", used: false },
	{ name: "NE", val: "nine", used: false }
];

$(document).ready(function(){
	getRandomPhrase();
	
	$("#answer").keypress(function(e){
		if(e.which == 13){
			checkAnswer($(this).val());
			getRandomPhrase();
			return false;  
		}
	}); 
});

function checkAnswer(txt){
	if(phrases[curr].val == txt){
		correct++;
		$("body").animate({backgroundColor: "#4CAF50"}, function(){
			$("body").animate({backgroundColor: "#424242"});
		});
	}
	else{
		wrong++;
		$("body").animate({backgroundColor: "#F44336"}, function(){
			$("body").animate({backgroundColor: "#424242"});
		});
	}
}

function getRandomPhrase(){
	var num;
	if(countUnusedPhrases() == 0){
		$("#question").html(Math.floor((correct / (correct + wrong)) * 100) + "%");
		$("#answer").blur();
		$("#answer").val("");
		$("#answer").hide();
	}
	else{
		while(true){
			num = Math.floor(Math.random() * phrases.length);
			if(phrases[num].used == false){
				phrases[num].used = true;
				break;
			}
		}
		
		curr = num;
		$("#question").html(phrases[num].name);
		$("#answer").val("");
	}
}

function countUnusedPhrases(){
	var unused = 0;
	$(phrases).each(function(index, elem){
		if(elem.used == false) unused ++;
	});
	return unused;
}