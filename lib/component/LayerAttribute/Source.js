"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var useEffect = React.useEffect;

var _default = React.memo(function Chart(props) {
  var layer = props.layer,
      source = props.source;
  var data = source.data,
      sourceOption = (0, _objectWithoutProperties2.default)(source, ["data"]);
  useEffect(function () {
    if (!layer.inited) {
      layer.source(data, sourceOption);
    } else {
      layer.setData(data, sourceOption);
    }

    if (sourceOption.autoFit) {
      layer.fitBounds(sourceOption && sourceOption.fitBoundsOptions);
    }
  }, [data, JSON.stringify(sourceOption)]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Source.js.map