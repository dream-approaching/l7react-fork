"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityBuildingLayer = exports.ImageLayer = exports.RasterLayer = exports.HeatmapLayer = exports.PointLayer = exports.LineLayer = exports.PolygonLayer = void 0;

var React = _interopRequireWildcard(require("react"));

var _Layer = _interopRequireDefault(require("./LayerAttribute/Layer"));

var PolygonLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('polygonLayer', props);
});
exports.PolygonLayer = PolygonLayer;
var LineLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('lineLayer', props);
});
exports.LineLayer = LineLayer;
var PointLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('pointLayer', props);
});
exports.PointLayer = PointLayer;
var HeatmapLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('heatmapLayer', props);
});
exports.HeatmapLayer = HeatmapLayer;
var RasterLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('rasterLayer', props);
});
exports.RasterLayer = RasterLayer;
var ImageLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('imagelayer', props);
});
exports.ImageLayer = ImageLayer;
var CityBuildingLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('citybuildinglayer', props);
});
exports.CityBuildingLayer = CityBuildingLayer;
//# sourceMappingURL=Layer.js.map