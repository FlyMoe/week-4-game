var attributes = {
	han_solo:{hp:120, ap:8, cap:20},
	kylo_ren:{hp:100, ap:10, cap:22},
	r2d2:{hp:150, ap:9, cap:12},
	boba_fett:{hp:180, ap:12, cap:22}
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
var hp;
var hp2;
var clickedImage;
var attackerHP;
var defenderHP;

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
					// $("#row1_img1").off("click");
					row1_img1 = true;
					break;
				case "row1_img2":
					$("#row1_img1").hide();
					$("#row1_img3").hide();
					$("#row1_img4").hide();
					$("#row2_img2").hide();
					$("#row2_img1").show();
					$("#row2_img3").show();
					$("#row2_img4").show();	
					// $("#row1_img2").off("click");
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
					// $("#row1_img3").off("click");
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
					// $("#row1_img4").off("click");
					row1_img4 = true;
					break;
				case "row2_img1":
					$("#row2_img1").hide();
					$("#row3_img1").show();
					// $("#row2_img2").off("click");
					// $("#row2_img3").off("click");
					// $("#row2_img4").off("click");
					row2_img1 = true;
					defenderHP = attributes.han_solo.hp;
					break;	
				case "row2_img2":
					$("#row2_img2").hide();
					$("#row3_img2").show();
					// $("#row2_img1").off("click");
					// $("#row2_img3").off("click");
					// $("#row2_img4").off("click");
					row2_img2 = true;
					defenderHP = attributes.kylo_ren.hp;	
					break;	
				case "row2_img3":
					$("#row2_img3").hide();
					$("#row3_img3").show();
					// $("#row2_img1").off("click");
					// $("#row2_img2").off("click");
					// $("#row2_img4").off("click");
					row2_img3 = true;
					defenderHP = attributes.r2d2.hp;
					break;	
				case "row2_img4":
					$("#row2_img4").hide();
					$("#row3_img4").show();
					// $("#row2_img1").off("click");
					// $("#row2_img2").off("click");
					// $("#row2_img3").off("click");
					row2_img4 = true;
					defenderHP = attributes.boba_fett.hp;
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
		attackerHP = attributes.han_solo.hp;
		attackerID = "attackerHP_han";
		row1_img1 = false;
	} else if (row1_img2 == true) {
		attackPower += attributes.kylo_ren.ap;
		attackerHP = attributes.kylo_ren.hp;
		attackerID = "attackerHP_kylo";
		row1_img2 = false;
	} else if (row1_img3 == true) {
		attackPower += attributes.r2d2.ap;
		attackerHP = attributes.r2d2.hp;
		attackerID = "attackerHP_r2d2";
		row1_img3 = false;
	} else if (row1_img4 == true) {
		attackPower += attributes.boba_fett.ap;
		attackerHP = attributes.boba_fett.hp;
		attackerID = "attackerHP_boba";
		row1_img4 = false;
	}
	console.log(attackPower);
	// Counter Attack Power
	if (row2_img1 == true) {
		counterAttackPower = attributes.han_solo.cap;	
		counterAttackCharacter = "Han Solo";
		defenderID = "defenderHP_han";			
	} else if (row2_img2 == true) {
		counterAttackPower = attributes.kylo_ren.cap;
		counterAttackCharacter = "Kylo Ren";
		defenderID = "defenderHP_kylo";
	} else if (row2_img3 == true) {
		counterAttackPower = attributes.r2d2.cap;
		counterAttackCharacter = "R2D2";
		defenderID = "defenderHP_r2d2";	
	} else if (row2_img4 == true) {
		counterAttackPower = attributes.boba_fett.cap;
		counterAttackCharacter = "Boba Fett";
		defenderID = "defenderHP_fett";	
	}

	$("#attack1").html("You attacked "+counterAttackCharacter+" for "+attackPower+" damage");
	$("#attack2").html(counterAttackCharacter+" attacked you back for "+counterAttackPower+" damage");
	defenderHP = defenderHP - attackPower;
	$("#"+attackerID).html(attackerHP);
	$("#"+defenderID).html(defenderHP);

	if(attackerHP <= 0) {
		$("#attack1").html("");
		$("#attack2").html("");
		$("#win_lose").html("You have been defeated...... GAME OVER!");
		var resetbutton = $('<input id="reset" type="button" value="reset" onclick="reset();"/>');
        $("body").append(resetbutton);
        $("#button1").prop("disabled",true);
	} else if (defenderHP <= 0) {
		$("#win_lose").html("You won!");
		$("#attack1").html("");
		$("#attack2").html("");
		won();
	}	
}

function won () {
	// Hide all row 3 images.
	$("#row3_img1").hide();
	$("#row3_img2").hide();
	$("#row3_img3").hide();
	$("#row3_img4").hide();	

	// Reset attacker's Hit points
	$("#attackerHP_han").html(attributes.han_solo.hp);
	$("#attackerHP_kylo").html(attributes.kylo_ren.hp);
	$("#attackerHP_r2d2").html(attributes.r2d2.hp);
	$("#attackerHP_boba").html(attributes.boba_fett.hp);

}


function reset (){
	// reset variables
	row2_img1 = false;
	row2_img2 = false;
	row2_img3 = false;
	row2_img4 = false;
	row3_img1 = false;
	row3_img2 = false;
	row3_img3 = false;
	row3_img4 = false;
	attackPower = 0;
	attackerHP = 0;
	defenderHP = 0;
	counterAttackPower = 0;

	// Show/hide the appropriate images
	$("#row1_img1").show();
	$("#row1_img2").show();
	$("#row1_img3").show();
	$("#row1_img4").show();
	$("#row2_img1").hide();
	$("#row2_img2").hide();
	$("#row2_img3").hide();
	$("#row2_img4").hide();
	$("#row3_img1").hide();
	$("#row3_img2").hide();
	$("#row3_img3").hide();
	$("#row3_img4").hide();	

	// undisable the attack button
	$("#button1").prop("disabled",false);

	// Remove the reset button
	$("#reset").remove();

	// Reset attacker's Hit points
	$("#attackerHP_han").html(attributes.han_solo.hp);
	$("#attackerHP_kylo").html(attributes.kylo_ren.hp);
	$("#attackerHP_r2d2").html(attributes.r2d2.hp);
	$("#attackerHP_boba").html(attributes.boba_fett.hp);

	// Reset defender's hit points
	$("#defenderHP_han").html(attributes.han_solo.hp);
	$("#defenderHP_kylo").html(attributes.kylo_ren.hp);
	$("#defenderHP_r2d2").html(attributes.r2d2.hp);
	$("#defenderHP_boba").html(attributes.boba_fett.hp);

	// Reset win_lose div
	$("#win_lose").html("");
}