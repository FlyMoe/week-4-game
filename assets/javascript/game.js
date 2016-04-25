var attributes = {
	han_solo:{hp:120, ap:8, cap:20},
	kylo_ren:{hp:200, ap:10, cap:30},
	r2d2:{hp:180, ap:9, cap:24},
	boba_fett:{hp:140, ap:7, cap:28}
}
var row1_img1;
var row1_img2;
var row1_img3;
var row1_img4;
var row2_img1;
var row2_img2;
var row2_img3;
var row2_img4;
var attackPower = 0;
var counterAttackPower = 0;

// Javascript function that wraps everything
$(document).ready(function(){

	$("#row2_img1").hide();
	$("#row2_img2").hide();
	$("#row2_img3").hide();
	$("#row2_img4").hide();

	// ******** Row 1 *******
	// Click Img 1, hide the rest of the images
	$("#row1_img1").on("click", function(){
		$("#row1_img2").hide();
		$("#row1_img3").hide();
		$("#row1_img4").hide();
		$("#row2_img1").hide();	
		$("#row2_img2").show();
		$("#row2_img3").show();
		$("#row2_img4").show();
		$("#row1_img1").off("click");
		row1_img1 = true;
	});
	// Click Img 2, hide the rest of the images
	$("#row1_img2").on("click", function(){
		$("#row1_img1").hide();
		$("#row1_img3").hide();
		$("#row1_img4").hide();
		$("#row2_img2").hide();
		$("#row2_img1").show();
		$("#row2_img3").show();
		$("#row2_img4").show();	
		$("#row1_img2").off("click");
		row1_img2 = true;	
	});
	// Click Img 3, hide the rest of the images
	$("#row1_img3").on("click", function(){
		$("#row1_img1").hide();
		$("#row1_img2").hide();
		$("#row1_img4").hide();
		$("#row2_img3").hide();
		$("#row2_img1").show();
		$("#row2_img2").show();
		$("#row2_img4").show();
		$("#row1_img3").off("click");
		row1_img3 = true;
	});
	// Click Img 4, hide the rest of the images
	$("#row1_img4").on("click", function(){
		$("#row1_img1").hide();
		$("#row1_img2").hide();
		$("#row1_img3").hide();
		$("#row2_img4").hide();
		$("#row2_img1").show();
		$("#row2_img2").show();
		$("#row2_img3").show();
		$("#row1_img4").off("click");
		row1_img4 = true;
	});

	$("#row3_img1").hide();
	$("#row3_img2").hide();
	$("#row3_img3").hide();
	$("#row3_img4").hide();

	// ******** Row 2 *******
	//Click Img 1 in row 2
	$("#row2_img1").on("click", function(){
		$("#row2_img1").hide();
		$("#row3_img1").show();
		$("#row2_img2").off("click");
		$("#row2_img3").off("click");
		$("#row2_img4").off("click");
		row2_img1 = true;
	});
	//Click Img 2 in row 2
	$("#row2_img2").on("click", function(){
		$("#row2_img2").hide();
		$("#row3_img2").show();
		$("#row2_img1").off("click");
		$("#row2_img3").off("click");
		$("#row2_img4").off("click");
		row2_img2 = true;
	});
		//Click Img 3 in row 2
	$("#row2_img3").on("click", function(){
		$("#row2_img3").hide();
		$("#row3_img3").show();
		$("#row2_img1").off("click");
		$("#row2_img2").off("click");
		$("#row2_img4").off("click");
		row2_img3 = true;
	});
	//Click Img 4 in row 2
	$("#row2_img4").on("click", function(){
		$("#row2_img4").hide();
		$("#row3_img4").show();
		$("#row2_img1").off("click");
		$("#row2_img2").off("click");
		$("#row2_img3").off("click");
		row2_img4 = true;
	});


});

function attack() {
	var ranNumber;
	var attackCharacter;
	//console.log(attributes.r2d2.hp);
	// 	han_solo:{hp:120, ap:8, cap:20},
	// kylo_ren:{hp:200, ap:10, cap:30},
	// r2d2:{hp:180, ap:9, cap:24},
	// boba_fett:{hp:140, ap:7, cap:28}

	// Attack power
	if (row1_img1 == true) {
		attackPower += attributes.han_solo.ap;	
		attackCharacter = "Han Solo";	
	} else if (row1_img2 == true) {
		attackPower += attributes.kylo_ren.ap;
		attackCharacter = "Kylo Ren";	
	} else if (row1_img3 == true) {
		attackPower += attributes.r2d2.ap;
		attackCharacter = "R2D2";	
	} else if (row1_img4 == true) {
		attackPower += attributes.boba_fett.ap;
		attackCharacter = "Boba Fett";	
	}
	console.log(attackPower);
	// Counter Attack Power
	if (row2_img1 == true) {
		counterAttackPower = attributes.han_solo.cap;	
		counterAttackCharacter = "Han Solo";		
	} else if (row2_img2 == true) {
		counterAttackPower = attributes.kylo_ren.cap;
		counterAttackCharacter = "Kylo Ren";
	} else if (row2_img3 == true) {
		counterAttackPower = attributes.r2d2.cap;
		counterAttackCharacter = "R2D2";
	} else if (row2_img4 == true) {
		counterAttackPower = attributes.boba_fett.cap;
		counterAttackCharacter = "Boba Fett";
	}

	document.getElementById("attack1").innerHTML = "You attacked "+counterAttackCharacter+" for "+attackPower+" damage";
	document.getElementById("attack2").innerHTML = counterAttackCharacter+" attacked you back for "+counterAttackPower+" damage";


}

function reset (){
	row2_img1 = false;
	row2_img2 = false;
	row2_img3 = false;
	row2_img4 = false;
	row3_img1 = false;
	row3_img2 = false;
	row3_img3 = false;
	row3_img4 = false;
	attackPower = 0;
}

function handler( event ) {
  var target = $( event.target );
  if ( target.is( "li" ) ) {
    target.children().toggle();
  }
}
