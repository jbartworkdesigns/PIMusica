var tmr = (function() {
    'use strict';

    var protocol = window.location.protocol;

    var BaseURL =  protocol + '//' + window.location.hostname;

    var initHome = function() {
        tmr.home.initModule();
    };

    var initCalendar = function(container) {
        tmr.clndr.initModule(container);
    };

    var initPopup = function(list, media, delegate) {
        tmr.popup.initModule(list, media, delegate);
    };

    return {
        BaseURL: BaseURL,
        initHome: initHome,
        initCalendar: initCalendar,
        initPopup: initPopup
    };
})();
