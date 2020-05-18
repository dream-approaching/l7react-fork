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
      style = props.style;
  useEffect(function () {
    layer.style(style);
  }, Object.keys(style).map(function (key) {
    return style[key];
  }));
  return null;
});

exports.default = _default;
//# sourceMappingURL=Style.js.map