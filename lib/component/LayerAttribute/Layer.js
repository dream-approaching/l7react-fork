"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BaseLayer;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _l = require("@antv/l7");

var React = _interopRequireWildcard(require("react"));

var _LayerContext = require("../LayerContext");

var _SceneContext = require("../SceneContext");

var _ = require("./");

var _jsxFileName = "/Users/lizhengxue/Documents/AntV/github/l7-release/L7/packages/react/src/component/LayerAttribute/Layer.tsx";
var useEffect = React.useEffect,
    useState = React.useState;

function BaseLayer(type, props) {
  var source = props.source,
      color = props.color,
      shape = props.shape,
      style = props.style,
      size = props.size,
      scale = props.scale,
      active = props.active,
      select = props.select,
      filter = props.filter,
      animate = props.animate,
      options = props.options,
      onLayerLoaded = props.onLayerLoaded;
  var mapScene = (0, _SceneContext.useSceneValue)();

  var _useState = useState(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      layer = _useState2[0],
      setLayer = _useState2[1];

  if (!layer) {
    var l;

    switch (type) {
      case 'polygonLayer':
        l = new _l.PolygonLayer(options);
        break;

      case 'lineLayer':
        l = new _l.LineLayer(options);
        break;

      case 'pointLayer':
        l = new _l.PointLayer(options);
        break;

      case 'heatmapLayer':
        l = new _l.HeatmapLayer(options);
        break;

      case 'rasterLayer':
        l = new _l.RasterLayer(options);
        break;

      case 'imageLayer':
        l = new _l.ImageLayer(options);
        break;

      case 'citybuildingLayer':
        l = new _l.CityBuildingLayer(options);
        break;

      default:
        l = new _l.PolygonLayer(options);
    }

    l.on('inited', function () {
      if (onLayerLoaded) {
        onLayerLoaded(l, mapScene);
      }
    });
    setLayer(l);
  }

  useEffect(function () {
    if (layer !== undefined) {
      mapScene.addLayer(layer);
      return function () {
        mapScene.removeLayer(layer);
      };
    }
  }, []);
  useEffect(function () {
    if (layer) {
      mapScene.render();
    }
  });
  useEffect(function () {
    if (layer && layer.inited && options) {
      layer.updateLayerConfig(options);
    }
  }, [options === null || options === void 0 ? void 0 : options.minZoom, options === null || options === void 0 ? void 0 : options.maxZoom, options === null || options === void 0 ? void 0 : options.visible]);
  useEffect(function () {
    if (layer && layer.inited && options && options.zIndex) {
      layer.setIndex(options.zIndex);
    }
  }, [options === null || options === void 0 ? void 0 : options.zIndex]);
  useEffect(function () {
    if (layer && layer.inited && options && options.blend) {
      layer.setBlend(options.blend);
    }
  }, [options === null || options === void 0 ? void 0 : options.blend]);
  return layer !== null && layer !== undefined ? React.createElement(_LayerContext.LayerContext.Provider, {
    value: layer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, React.createElement(_.Source, {
    layer: layer,
    source: source,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), scale && React.createElement(_.Scale, {
    layer: layer,
    scale: scale,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), color && React.createElement(_.Color, {
    layer: layer,
    color: color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }), size && React.createElement(_.Size, {
    layer: layer,
    size: size,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 16
    }
  }), shape && React.createElement(_.Shape, {
    layer: layer,
    shape: shape,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), style && React.createElement(_.Style, {
    layer: layer,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), active && React.createElement(_.Active, {
    layer: layer,
    active: active,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 18
    }
  }), select && React.createElement(_.Select, {
    layer: layer,
    select: select,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 18
    }
  }), filter && React.createElement(_.Filter, {
    layer: layer,
    filter: filter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 18
    }
  }), animate && React.createElement(_.Animate, {
    layer: layer,
    animate: animate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }), props.children) : null;
}
//# sourceMappingURL=Layer.js.map