$(function(){
    // Tooltip
    $('#content_img1').tooltip({title: "Browser image", placement: "top"});
    $('#content_img2').tooltip({title: "Devices image", placement: "top"});
    $('#content_img3').tooltip({title: "Logos image", placement: "top"});
    // Modal button
    $('#modal_start').click(function(){
        var $text = $('#text').val();
        $('.modal-body').html('<h3>' + $text + '</h3>');
        $('#modal').modal();
    });

});
