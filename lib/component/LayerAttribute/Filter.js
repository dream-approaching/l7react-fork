"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var useEffect = React.useEffect;

var _default = React.memo(function Chart(props) {
  var layer = props.layer,
      filter = props.filter;
  useEffect(function () {
    if (filter.field) {
      layer.filter(filter.field, filter.values);
    }
  }, [filter.field, filter.values, JSON.stringify(filter.values), JSON.stringify(filter.options)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Filter.js.map