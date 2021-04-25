(function ($) {
    $(document).ready(function () {
        /* removes text from search form on focus and replaces it on unfocus - if text is entered then it does not get replaced with default on unfocus */
        $('#SearchForm_SearchForm_action_results').val('Search');
        var searchField = $('#SearchForm_SearchForm_Search');
        var default_value = searchField.val();
        searchField.attr("placeholder", "Search");

        var searchIcon = document.querySelector('#search-icon');
        var searchInput = document.querySelector('#SearchForm_SearchForm_Search');
        var logo = document.querySelector('#logo');

        searchIcon.addEventListener('click', function () {
            searchInput.classList.add('active');
            searchInput.focus();
        });

        searchField.focus(function () {
            $(this).addClass('active');
            searchIcon.classList.add('icon-hidden');
            logo.classList.add('mobile-hide-logo');
            if (searchField.val() === default_value) {
                searchField.val('');
            }
        });
        searchField.blur(function () {
            $(this).removeClass('active');
            searchIcon.classList.remove('icon-hidden');
            logo.classList.remove('mobile-hide-logo');
            if (searchField.val() === '') {
                searchField.val(default_value);
            }
        });

        document.addEventListener('keyup', function (e) {
            if (searchInput.classList.contains('active') & e.keyCode === 27) {
                searchInput.blur();
            }
        });

        document.addEventListener('touchend', function(e) {
            if (searchInput.classList.contains('active')) {
                searchInput.blur();
            }
        });

        $('.mfp-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            }});
    });
}(jQuery));