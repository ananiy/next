'use strict';

exports.__esModule = true;

var _util = require('../util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function size(rule, value, errors, options) {
    var key = null;
    var isNum = typeof value === 'number';
    var isStr = typeof value === 'string';

    if (isNum) {
        key = 'number';
    } else if (isStr) {
        key = 'string';
    }

    if (!key) {
        return false;
    }

    var val = value;
    var max = Number(rule.max);
    var min = Number(rule.min);

    if (min || max) {
        if (isStr) {
            val = Number(val);
        }
        if (val < min) {
            errors.push(util.format(options.messages[key].min, rule.field, rule.min));
        } else if (val > max) {
            errors.push(util.format(options.messages[key].max, rule.field, rule.max));
        }
    }
}

exports.default = size;
module.exports = exports['default'];