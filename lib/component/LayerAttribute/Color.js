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
      color = props.color;
  useEffect(function () {
    color.field ? layer.color(color.field, color.values) : layer.color(color.values);
  }, [color.field, color.scale, JSON.stringify(color.values), JSON.stringify(color.options)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Color.js.map