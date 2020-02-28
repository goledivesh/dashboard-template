$(document).ready(function () {

    $(document).click(function () {
        $('.post-opt-wrap').fadeOut(200);
        $('.post-other-icon').removeClass('open');
        $('.category-select').hide();
    });

    $('.close').click(function () {
        $('.modal').removeClass('show fade');
    })

    $(function () {
        $('.side-block-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            dots: true,
            nav: false,
            responsiveClass: true,
            responsive: {
                1000: {
                    items: 1,
                }
            }
        });
    });

    $(function () {
        $('.db-collapse-wrap').on('click', function () {
            $(this).toggleClass('active');

            if ($('.db-collapse-wrap').hasClass('active')) {
                $('.db-sidebar-wrap').addClass('collapsed');
                $('.db-content-wrap').addClass('full-view');
            } else {
                $('.db-sidebar-wrap').removeClass('collapsed');
                $('.db-content-wrap').removeClass('full-view');
            }
        });
    });

    $(function () {
        $('.db-content-post-view-change > div').on('click', function () {
            $(this).addClass('active');
            $(this).nextAll().removeClass('active');
            $(this).prevAll().removeClass('active');

            if ($('.post-list-view').hasClass('active')) {
                $('.db-content-side-block').addClass('fixed');
                $('.db-content-side-block-wrap').addClass('list-view-active');
                $('.db-content-post-block').css('margin-right', '0');
                $('.chat-list-header p').html('Start Conversation' + '<span class="chat-present pull-right d-inline-block m-t-5 online"></span>');
            } else {
                $('.db-content-side-block').removeClass('fixed');
                $('.db-content-side-block-wrap').removeClass('list-view-active');
                $('.db-content-post-block').css('margin-right', '15px');
                $('.chat-list-header p').html('Conversation');
            }
        });
    });

    $(function () {
        $('.chat-list-header').on('click', function (e) {
            if ($('.post-list-view').hasClass('active')) {
                $('.chat-list-wrap').toggleClass('show');
                $('.chat-list-header span').toggleClass('fa fa-close').toggleClass('chat-present');
            }
        });

        $('.post-grid-view').on('click', function () {
            $('.chat-list-wrap').removeClass('show');
        });
    });

    $(function () {
        $('.chat-list-view li').on({
            mouseenter: function () {
                var x = $(this).find('a').text();
                $(this).attr('title', x);
            }
        });
    });

    $(function () {
        $('.post-other-icon').click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('open');

            if ($(this).hasClass('open')) {
                $(this).siblings('.post-opt-wrap').fadeIn(200);
            } else {
                $(this).siblings('.post-opt-wrap').fadeOut(200);
            }
        });
    });

    $(function () {
        $('.comment-textarea-wrap .form-control').on('keyup', function () {
            if ($(this).val().length > 0) {
                $(this).siblings('.comment-textarea-wrap .submit-comment').show();
            } else {
                $(this).siblings('.comment-textarea-wrap .submit-comment').hide();
            }
        });
    });


    $(function () {
        $('.add-attachments span').on('click', function () {
            $(this).parent().toggleClass('active');

            if ($(this).parent().hasClass('active')) {
                $(this).parent().siblings('.attachment-opt-wrap').addClass('active');
                $(this).children().addClass('fa-keyboard-o').removeClass('fa-paperclip').attr('title', 'Type message');
                $(this).parent().siblings('.comment-form').css({
                    visibility: 'hidden',
                    transform: 'translateX(15px)',
                    opacity: '0',
                    transition: '.4s ease'
                });
            } else {
                $(this).parent().siblings('.attachment-opt-wrap').removeClass('active');
                $(this).children().removeClass('fa-keyboard-o').addClass('fa-paperclip').attr('title', 'Add attachment');
                $(this).parent().siblings('.comment-form').css({
                    visibility: 'visible',
                    transform: 'translateX(0px)',
                    opacity: '1',
                    transition: '.4s ease'
                });
            }
        });
    });

    $(function () {
        $('.select-category-input').on('click', function (e) {
            e.stopPropagation();
            $('.category-select').show();
        })
        $('.category-select li').click(function () {
            var option_val = $(this).text();
            $('.select-category-input').val(option_val);
        });
    });

    $(function () {
        $('.add-new-post-btn').on('click', function () {
            $('#add_new_modal').addClass('show fade');
        });
    });

    $(function () {
        $('.add-post-form .form-control').on('keyup', function () {

            var empty = false;
            $('.add-post-form .form-control').each(function () {
                if ($(this).val().length == 0) {
                    empty = true;
                }
            });
            if (empty) {
                $('.post-submit').attr('disabled', 'disabled');
            } else {
                $('.post-submit').removeAttr('disabled', false);
            }

        });
    });








    // IIFE to ensure safe use of $
    //    (function ($) {
    //
    //        // Create plugin
    //        $.fn.tooltips = function (el) {
    //            var $tooltip,
    //                $body = $('body'),
    //                $el;
    //            // Ensure chaining works
    //            return this.each(function (i, el) {
    //                $el = $(el).attr("data-tooltip", i);
    //                // Make DIV and append to page 
    //                var $tooltip = $('<div class="tooltip" data-tooltip="' + i + '">' + $el.attr('title') + '<div class="arrow"></div></div>').appendTo("body");
    //                // Position right away, so first appearance is smooth
    //                var linkPosition = $el.position();
    //                $tooltip.css({
    //                    top: linkPosition.top - $tooltip.outerHeight() - 13,
    //                    left: linkPosition.left - ($tooltip.width() / 2)
    //                });
    //                $el
    //                    // Get rid of yellow box popup
    //                    .removeAttr("title")
    //                    // Mouseenter
    //                    .hover(function () {
    //                        $el = $(this);
    //                        $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']');
    //                        // Reposition tooltip, in case of page movement e.g. screen resize                        
    //                        var linkPosition = $el.position();
    //                        $tooltip.css({
    //                            top: linkPosition.top - $tooltip.outerHeight() - 13,
    //                            left: linkPosition.left - ($tooltip.width() / 2)
    //                        });
    //                        // Adding class handles animation through CSS
    //                        $tooltip.addClass("active");
    //                        // Mouseleave
    //                    }, function () {
    //                        $el = $(this);
    //                        // Temporary class for same-direction fadeout
    //                        $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']').addClass("out");
    //                        // Remove all classes
    //                        setTimeout(function () {
    //                            $tooltip.removeClass("active").removeClass("out");
    //                        }, 300);
    //                    });
    //            });
    //        }
    //    })(jQuery);
    //
    //    $("a[title]").tooltips();

});
