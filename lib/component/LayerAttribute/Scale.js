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
      scale = props.scale;
  useEffect(function () {
    layer.scale(scale.values);
  }, [scale.values]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Scale.js.map