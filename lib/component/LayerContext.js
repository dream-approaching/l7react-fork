"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayerValue = useLayerValue;
exports.LayerContext = void 0;

var _react = require("react");

var LayerContext = (0, _react.createContext)({});
exports.LayerContext = LayerContext;

function useLayerValue() {
  return (0, _react.useContext)(LayerContext);
}
//# sourceMappingURL=LayerContext.js.map