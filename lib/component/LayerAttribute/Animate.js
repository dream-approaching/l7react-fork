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
      animate = props.animate;
  useEffect(function () {
    layer.animate(animate);
  }, [JSON.stringify(animate)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Animate.js.map