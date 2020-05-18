"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _l = require("@antv/l7");

var _react = _interopRequireWildcard(require("react"));

var _SceneContext = require("./SceneContext");

var _default = _react.default.memo(function MapControl(props) {
  var scene = (0, _SceneContext.useSceneValue)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      setControl = _useState2[1];

  var type = props.type,
      position = props.position;
  (0, _react.useEffect)(function () {
    var ctr;

    switch (type) {
      case 'scale':
        ctr = new _l.Scale({
          position: position || 'bottomright'
        });
        break;

      case 'zoom':
        ctr = new _l.Zoom({
          position: position || 'topright'
        });
        break;

      case 'logo':
        ctr = new _l.Logo({
          position: position || 'bottomleft'
        });
    }

    setControl(ctr);
    scene.addControl(ctr);
    return function () {
      scene.removeControl(ctr);
    };
  }, [type, position]);
  return null;
});

exports.default = _default;
//# sourceMappingURL=Control.js.map