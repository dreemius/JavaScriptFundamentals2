var inputValue = document.getElementById('gettext');
var textareaValue = document.getElementById('settext');

// Bootstrap Items
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
	$('.dropdown-toggle').dropdown()
	$('#myModal').modal('hide')
})


// Input and textarea
inputValue.addEventListener('keyup', function(event){
	var tx = event.target.value;
	textareaValue.value = tx;
});

// Clear fields
document.getElementById('reset').addEventListener('click', function(){
	inputValue.value = '';
	textareaValue.value = '';
});
