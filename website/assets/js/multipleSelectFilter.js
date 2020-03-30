/*! Source: http://jsfiddle.net/YRea3/293/ */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$(document).ready(function() {
    var ddlFilterTableRow = $('select.ddlFilterTableRow');

    ddlFilterTableRow.on('change', function() {
        ddlFilterTableRow.attr('disabled', 'disabled');

        var records = $('.table').find('.Row');
        records.hide();

        var critriaAttributes = [];
        ddlFilterTableRow.each(function() {
            var $this = $(this),
                $selectedLength = $this.find(':selected').length,
                $critriaAttribute = '';

            if ($selectedLength > 0 && $this.val() != '0') {
                if ($selectedLength == 1) {
                    $critriaAttribute += '[data-' + $this.data('attribute') + '*="' + $this.val() + '"]';
                } else {
                    var $startDataAttribute = '[data-' + $this.data('attribute') + '*="',
                        $endDataAttribute = '"]',
                        $selectedValues = $this.val().toString();

                    $critriaAttribute += $startDataAttribute + $selectedValues.replaceAll(',', ($endDataAttribute + ',' + $startDataAttribute)) + $endDataAttribute;
                }
                critriaAttributes.push($critriaAttribute);
            }
        });

        var $showRecords = records;
        if (critriaAttributes.length > 0) {
            $.each(critriaAttributes, function(i, filterValue) {
                $showRecords = $showRecords.filter(filterValue);
            });
        }
        $showRecords.show();

        ddlFilterTableRow.removeAttr('disabled');
    });
});
