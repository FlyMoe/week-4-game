// var documentTitle = document.title + " - ";

// (function titleMarquee() {
//     document.title = documentTitle = documentTitle.substring(1) + documentTitle.substring(0,1);
//     setTimeout(titleMarquee, 200);
// })();


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
	});
	//Click Img 2 in row 2
	$("#row2_img2").on("click", function(){
		$("#row2_img2").hide();
		$("#row3_img2").show();
		$("#row2_img1").off("click");
		$("#row2_img3").off("click");
		$("#row2_img4").off("click");
	});
		//Click Img 3 in row 2
	$("#row2_img3").on("click", function(){
		$("#row2_img3").hide();
		$("#row3_img3").show();
		$("#row2_img1").off("click");
		$("#row2_img2").off("click");
		$("#row2_img4").off("click");
	});
	//Click Img 4 in row 2
	$("#row2_img4").on("click", function(){
		$("#row2_img4").hide();
		$("#row3_img4").show();
		$("#row2_img1").off("click");
		$("#row2_img2").off("click");
		$("#row2_img3").off("click");
	});




});
