"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _l = require("@antv/l7");

var _react = _interopRequireWildcard(require("react"));

var _SceneContext = require("./SceneContext");

var _this = void 0,
    _jsxFileName = "/Users/lizhengxue/Documents/AntV/github/l7-release/L7/packages/react/src/component/Scene.tsx";

var _default = _react.default.memo(function (props) {
  var style = props.style,
      className = props.className,
      map = props.map;
  var container = (0, _react.createRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scene = _useState2[0],
      setScene = _useState2[1];

  (0, _react.useEffect)(function () {
    var sceneInstance = new _l.Scene({
      id: container.current,
      map: map
    });
    sceneInstance.on('loaded', function () {
      setScene(sceneInstance);
    });
    return function () {
      sceneInstance.destroy();
    };
  }, []);
  return _react.default.createElement(_SceneContext.SceneContext.Provider, {
    value: scene,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, (0, _react.createElement)('div', {
    ref: container,
    style: style,
    className: className
  }, scene && props.children));
});

exports.default = _default;
//# sourceMappingURL=Scene.js.map