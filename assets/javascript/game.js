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

var clickedImage;

// Javascript function that wraps everything
$(document).ready(function(){

	// Hide all row 2 and 3 images at the start.
	// They will be shown later as the user clicks on images.
	$("#row2_img1").hide();
	$("#row2_img2").hide();
	$("#row2_img3").hide();
	$("#row2_img4").hide();
	$("#row3_img1").hide();
	$("#row3_img2").hide();
	$("#row3_img3").hide();
	$("#row3_img4").hide();


	$("div").on("click", function(){
		clickedImage = $(this).data("image");
		if (typeof clickedImage !== "undefined") {
		//console.log("the images clicked", $(this).data("image") );
			console.log("the images clicked: "+clickedImage);
			switch (clickedImage) {
				case "row1_img1":
					$("#row1_img2").hide();
					$("#row1_img3").hide();
					$("#row1_img4").hide();
					$("#row2_img1").hide();	
					$("#row2_img2").show();
					$("#row2_img3").show();
					$("#row2_img4").show();
					$("#row1_img1").off("click");
					break;
				case "row1_img2":
					$("#row1_img1").hide();
					$("#row1_img3").hide();
					$("#row1_img4").hide();
					$("#row2_img2").hide();
					$("#row2_img1").show();
					$("#row2_img3").show();
					$("#row2_img4").show();	
					$("#row1_img2").off("click");
					row1_img2 = true;	
					break;
				case "row1_img3":
					$("#row1_img1").hide();
					$("#row1_img2").hide();
					$("#row1_img4").hide();
					$("#row2_img3").hide();
					$("#row2_img1").show();
					$("#row2_img2").show();
					$("#row2_img4").show();
					$("#row1_img3").off("click");
					row1_img3 = true;
					break;
				case "row1_img4":
					$("#row1_img1").hide();
					$("#row1_img2").hide();
					$("#row1_img3").hide();
					$("#row2_img4").hide();
					$("#row2_img1").show();
					$("#row2_img2").show();
					$("#row2_img3").show();
					$("#row1_img4").off("click");
					row1_img4 = true;
					break;
				case "row2_img1":
					$("#row2_img1").hide();
					$("#row3_img1").show();
					$("#row2_img2").off("click");
					$("#row2_img3").off("click");
					$("#row2_img4").off("click");
					row2_img1 = true;
					break;	
				case "row2_img2":
					$("#row2_img2").hide();
					$("#row3_img2").show();
					$("#row2_img1").off("click");
					$("#row2_img3").off("click");
					$("#row2_img4").off("click");
					row2_img2 = true;
					break;	
				case "row2_img3":
					$("#row2_img3").hide();
					$("#row3_img3").show();
					$("#row2_img1").off("click");
					$("#row2_img2").off("click");
					$("#row2_img4").off("click");
					row2_img3 = true;
					break;	
				case "row2_img4":
					$("#row2_img4").hide();
					$("#row3_img4").show();
					$("#row2_img1").off("click");
					$("#row2_img2").off("click");
					$("#row2_img3").off("click");
					row2_img4 = true;
					break;	
			}
		}
	});
});

function attack() {
	var ranNumber;
	var counterAttackCharacter;
	var hp;
	//console.log(attributes.r2d2.hp);
	// 	han_solo:{hp:120, ap:8, cap:20},
	// kylo_ren:{hp:200, ap:10, cap:30},
	// r2d2:{hp:180, ap:9, cap:24},
	// boba_fett:{hp:140, ap:7, cap:28}

	// Attack power
	if (row1_img1 == true) {
		attackPower += attributes.han_solo.ap;
		hp = attributes.han_solo.hp;	
	} else if (row1_img2 == true) {
		attackPower += attributes.kylo_ren.ap;
		hp = attributes.kylo_ren.hp;
	} else if (row1_img3 == true) {
		attackPower += attributes.r2d2.ap;
		hp = attributes.r2d2.hp;
	} else if (row1_img4 == true) {
		attackPower += attributes.boba_fett.ap;
		hp = attributes.boba_fett.hp;
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
	document.getElementById("hp").innerHTML = counterAttackCharacter+" attacked you back for "+counterAttackPower+" damage";

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
