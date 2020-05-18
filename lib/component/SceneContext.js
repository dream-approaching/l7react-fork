"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSceneValue = useSceneValue;
exports.SceneContext = void 0;

var _react = require("react");

var SceneContext = (0, _react.createContext)({});
exports.SceneContext = SceneContext;

function useSceneValue() {
  return (0, _react.useContext)(SceneContext);
}
//# sourceMappingURL=SceneContext.js.map