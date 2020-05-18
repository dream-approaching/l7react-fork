"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerEvent = void 0;

var React = _interopRequireWildcard(require("react"));

var _LayerContext = require("./LayerContext");

var useEffect = React.useEffect;
var LayerEvent = React.memo(function (props) {
  var type = props.type,
      handler = props.handler;
  var layer = (0, _LayerContext.useLayerValue)();
  useEffect(function () {
    layer.off(type, handler);
    layer.on(type, handler);
    return function () {
      layer.off(type, handler);
    };
  }, [type, handler]);
  return null;
});
exports.LayerEvent = LayerEvent;
//# sourceMappingURL=LayerEvent.js.map