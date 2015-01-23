(function(d3, fc) {
    'use strict';

    function noop(date) { return date; }

    fc.scale.discontinuity.identity = {
        getDistance: function(startDate, endDate) {
            if (arguments.length === 1) {
                var domain = startDate;
                startDate = domain[0];
                endDate = domain[1];
            }
            return endDate.getTime() - startDate.getTime();
        },
        applyOffset: function(startDate, ticks) {
            return new Date(startDate.getTime() + ticks);
        },
        clampUp: noop,
        clampDown: noop
    };
}(d3, fc));