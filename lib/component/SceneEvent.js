"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SceneContext = require("./SceneContext");

var useEffect = React.useEffect;
var SceneEvent = React.memo(function (props) {
  var type = props.type,
      handler = props.handler;
  var mapScene = (0, _SceneContext.useSceneValue)();
  useEffect(function () {
    mapScene.on(type, handler);
    return function () {
      mapScene.off(type, handler);
    };
  }, [type]);
  return null;
});
var _default = SceneEvent;
exports.default = _default;
//# sourceMappingURL=SceneEvent.js.map