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
      shape = props.shape;
  useEffect(function () {
    shape.field ? layer.shape(shape.field, shape.values) : layer.shape(shape.values);
  }, [shape.field, JSON.stringify(shape.values), JSON.stringify(shape.options)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Shape.js.map