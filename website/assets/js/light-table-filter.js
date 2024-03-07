/*!
 * Lightweight javascript table filter
 *
 * Source: https://github.com/roparz/Light-Javascript-Table-Filter
 */
var LightTableFilter;

LightTableFilter = (function() {
  var _filter, _input, _onInputEvent;
  _input = null;
  _onInputEvent = (function(_this) {
    return function(e) {
      var row, table, tables, tbody, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
      _input = e.target;
      tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      for (_i = 0, _len = tables.length; _i < _len; _i++) {
        table = tables[_i];
        _ref = table.tBodies;
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          tbody = _ref[_j];
          _ref1 = tbody.rows;
          for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
            row = _ref1[_k];
            _filter(row);
          }
        }
      }
    };
  })(this);
  _filter = function(row) {
    var len, n, text, val, vals, _i, _len;
    text = row.textContent.toLowerCase();
    vals = _input.value.toLowerCase().split(' ');
    len = vals.length;
    n = 0;
    for (_i = 0, _len = vals.length; _i < _len; _i++) {
      val = vals[_i];
      if (text.indexOf(val) !== -1) {
        n++;
      }
    }
    return row.style.display = n === len ? 'table-row' : 'none';
  };
  return {
    init: function() {
      var input, inputs, _i, _len, _results;
      inputs = document.getElementsByClassName('light-table-filter');
      _results = [];
      for (_i = 0, _len = inputs.length; _i < _len; _i++) {
        input = inputs[_i];
        _results.push(input.oninput = _onInputEvent);
      }
      return _results;
    }
  };
})();
LightTableFilter.init();
