/**
 * Created by kalininright on 31.10.15.
 */


jQuery(document).ready(function($) {
    $('.nav-toggle').click(function() {
        $('#main-menu div ul:first-child').slideToggle(250);
        return false;
    });

    // Scroll book
    $('#book-sections-more').scrollTop($('b').offset().top - 250);


    if( ($(window).width() > 640) || ($(document).width() > 640) ) {
        $('#main-menu li').mouseenter(function() {
            $(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
        });
        $('#main-menu li').mouseleave(function() {
            $(this).children('ul').stop(true, true).fadeOut(250).css('display', 'block');
        })
    } else {
        $('#main-menu li').each(function() {
            if($(this).children('ul').length)
                $(this).append('<span class="drop-down-toggle"><span class="drop-down-arrow"></span></span>');
        });
        $('.drop-down-toggle').click(function() {
            $(this).parent().children('ul').slideToggle(250);
        });
    }

});

(function($){
    Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
        var $view = $(response.selector);
        // Проверка на нужный view
        if($view.hasClass('view-main-page')) {
            $('body,html').animate({
                scrollTop: 0
            }, 550);
        } else {
            // Scroll to the top of the view. This will allow users
            // to browse newly loaded content after e.g. clicking a pager
            // link.
            var offset = $(response.selector).offset();
            // We can't guarantee that the scrollable object should be
            // the body, as the view could be embedded in something
            // more complex such as a modal popup. Recurse up the DOM
            // and scroll the first element that has a non-zero top.
            var scrollTarget = response.selector;
            while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
                scrollTarget = $(scrollTarget).parent();
            }
            // Only scroll upward
            if (offset.top - 10 < $(scrollTarget).scrollTop()) {
                $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
            }
        }
    };
})(jQuery);