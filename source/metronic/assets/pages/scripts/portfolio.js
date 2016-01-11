var Portfolio = function () {


  return {
    //main function to initiate the module
    init: function () {

      if(location.hash){
	var projectName = location.hash;
	var projectLink = $("a[href=" + projectName + "]");
	if(projectLink){
	  showProject(projectLink.parent().parent().parent());
	} else{
	  $('.mix-grid').mixitup();
	}
      } else {
	$('.mix-grid').mixitup();
      }

      $('.mix-preview, .mix-link').click(function(){
        showProject($(this).parent().parent().parent());
      });

      $(".mix-filter, .back").click(function(){
	$(".mix_all").removeClass("col-xs-12");
	$(".mix_all").addClass("col-sm-6");
	$(".mix_all").addClass("col-md-4");
	$(".mix-info").hide();
	$(".mix-details").show();
	$(".mix-grid").children().show();
	location.hash = "";
      });
    

      function showProject(root){
	  console.log("here");
	  $(".mix-grid").children().hide();
	  root.show();
	  root.removeClass("col-md-4");
	  root.removeClass("col-sm-6");
	  root.addClass("col-xs-12");
	  root.find(".mix-details").hide();
	  root.find(".mix-info").show();
      }

      function hideProject(root){

      }

    }
  };

}();
