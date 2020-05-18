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
      size = props.size;
  useEffect(function () {
    size.field ? layer.size(size.field, size.values) : layer.size(size.values);
  }, [size.field, size.scale, JSON.stringify(size.values), JSON.stringify(size.options)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Size.js.map