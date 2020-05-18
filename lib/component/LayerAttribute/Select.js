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
      select = props.select;
  useEffect(function () {
    layer.select(select.option);
  }, [JSON.stringify(select)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Select.js.map