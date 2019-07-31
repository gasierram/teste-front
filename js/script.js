$(function(){
		$(".alert").hide()
    	$(".alertexito").hide()

  $("#btn").onclick(function() {
    var email = $("#email").val();
    var pass = $("#pass").val();
    if (email.length == 0 ) {

	$(".alert").show()
    }
    else if (pass.length == 0 ) {
		$(".alert").show()
    }
    else
    {
    	$(".alertexito").show()
    }
  });
});