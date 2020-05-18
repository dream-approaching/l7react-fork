"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _l = require("@antv/l7");

var _l7Maps = require("@antv/l7-maps");

var _react = _interopRequireWildcard(require("react"));

var _SceneContext = require("./SceneContext");

var _this = void 0,
    _jsxFileName = "/Users/lizhengxue/Documents/AntV/github/l7-release/L7/packages/react/src/component/AMapScene.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AMapScene = _react.default.memo(function (props) {
  var style = props.style,
      className = props.className,
      map = props.map,
      option = props.option,
      onSceneLoaded = props.onSceneLoaded;
  var container = (0, _react.createRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scene = _useState2[0],
      setScene = _useState2[1];

  (0, _react.useEffect)(function () {
    var sceneInstance = new _l.Scene(_objectSpread({
      id: container.current
    }, option, {
      map: new _l7Maps.GaodeMap(map)
    }));
    sceneInstance.on('loaded', function () {
      setScene(sceneInstance);

      if (onSceneLoaded) {
        onSceneLoaded(sceneInstance);
      }
    });
    return function () {
      sceneInstance.destroy();
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!scene) {
      return;
    }

    scene.setMapStyle(map.style);
  }, [map.style]);
  return _react.default.createElement(_SceneContext.SceneContext.Provider, {
    value: scene,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, (0, _react.createElement)('div', {
    ref: container,
    style: style,
    className: className
  }, scene && props.children));
});

var _default = AMapScene;
exports.default = _default;
//# sourceMappingURL=AMapScene.js.map