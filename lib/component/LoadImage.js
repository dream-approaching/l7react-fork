"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SceneContext = require("./SceneContext");

var useEffect = React.useEffect;

var _default = React.memo(function LoadImage(props) {
  var name = props.name,
      url = props.url;
  var mapScene = (0, _SceneContext.useSceneValue)();
  useEffect(function () {
    mapScene.addImage(name, url);
  }, [name, url]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=LoadImage.js.map