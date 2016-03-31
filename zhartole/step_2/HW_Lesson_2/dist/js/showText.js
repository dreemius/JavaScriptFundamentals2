/**
 * Created by qwerty on 22.03.2016.
 */

var showTextModal = (function (){
	$('#gettext').keyup(function() {
		var value = $( this ).val();
		$('#settext').html(""+ value +"");
	});

	$('#reset').click(function() {
		$('#gettext').val("");
		$('#settext').val("");
	});
}());

//// Bootstrap Items
//$(function () {
//	$('[data-toggle="tooltip"]').tooltip();
//	$('.dropdown-toggle').dropdown();
//	$('#myModal').modal('hide');
//});


