"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustoonConrol;

var _l = require("@antv/l7");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _SceneContext = require("./SceneContext");

var useEffect = React.useEffect,
    useState = React.useState;

function CustoonConrol(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      position = props.position;
  var mapScene = (0, _SceneContext.useSceneValue)();
  var el = document.createElement('div');
  useEffect(function () {
    var custom = new _l.Control({
      position: position
    });

    custom.onAdd = function () {
      if (className) {
        el.className = className;
      }

      if (style) {
        var cssText = Object.keys(style).map(function (key) {
          return "".concat(key, ":").concat(style[key]);
        }).join(';');
        el.style.cssText = cssText;
      }

      return el;
    };

    mapScene.addControl(custom);
    return function () {
      mapScene.removeControl(custom);
    };
  }, []);
  return (0, _reactDom.createPortal)(children, el);
}
//# sourceMappingURL=CustomControl.js.map