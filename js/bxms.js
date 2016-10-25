/**
 * Created by srambach on 10/19/16.
 */

/* Initialize Tool Tips */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/* Initialize Popovers */
$(document).ready(function() {
    $('[data-toggle=popover]').popovers()
});

/* make the "search" input box text cancel work */
/*** TODO: Needs to have this from jeff put in to trigger after the popup is shown: $('#myPopover').on('shown.bs.popover', function () { … });   ***/
(function($) {
    $(document).ready(function() {
        // Hide the clear button if the search input is empty
        $(".search-pf .has-clear .clear").each(function() {
            if (!$(this).prev('.form-control').val()) {
                $(this).hide();
            }
        });
        // Show the clear button upon entering text in the search input
        $(".search-pf .has-clear .form-control").keyup(function () {
            var t = $(this);
            t.next('button').toggle(Boolean(t.val()));
        });
        // Upon clicking the clear button, empty the entered text and hide the clear button
        $(".search-pf .has-clear .clear").click(function () {
            $(this).prev('.form-control').val('').focus();
            $(this).hide();
        });
    });
})(jQuery);



