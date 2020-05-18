import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { CityBuildingLayer, HeatmapLayer, ImageLayer, LineLayer, PointLayer, PolygonLayer, RasterLayer } from '@antv/l7';
import * as React from 'react';
import { LayerContext } from '../LayerContext';
import { useSceneValue } from '../SceneContext';
import { Active, Animate, Color, Filter, Scale, Select, Shape, Size, Source, Style } from './';
var useEffect = React.useEffect,
    useState = React.useState;
export default function BaseLayer(type, props) {
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
  var mapScene = useSceneValue();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      layer = _useState2[0],
      setLayer = _useState2[1];

  if (!layer) {
    var l;

    switch (type) {
      case 'polygonLayer':
        l = new PolygonLayer(options);
        break;

      case 'lineLayer':
        l = new LineLayer(options);
        break;

      case 'pointLayer':
        l = new PointLayer(options);
        break;

      case 'heatmapLayer':
        l = new HeatmapLayer(options);
        break;

      case 'rasterLayer':
        l = new RasterLayer(options);
        break;

      case 'imageLayer':
        l = new ImageLayer(options);
        break;

      case 'citybuildingLayer':
        l = new CityBuildingLayer(options);
        break;

      default:
        l = new PolygonLayer(options);
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
  return layer !== null && layer !== undefined ? React.createElement(LayerContext.Provider, {
    value: layer
  }, React.createElement(Source, {
    layer: layer,
    source: source
  }), scale && React.createElement(Scale, {
    layer: layer,
    scale: scale
  }), color && React.createElement(Color, {
    layer: layer,
    color: color
  }), size && React.createElement(Size, {
    layer: layer,
    size: size
  }), shape && React.createElement(Shape, {
    layer: layer,
    shape: shape
  }), style && React.createElement(Style, {
    layer: layer,
    style: style
  }), active && React.createElement(Active, {
    layer: layer,
    active: active
  }), select && React.createElement(Select, {
    layer: layer,
    select: select
  }), filter && React.createElement(Filter, {
    layer: layer,
    filter: filter
  }), animate && React.createElement(Animate, {
    layer: layer,
    animate: animate
  }), props.children) : null;
}
//# sourceMappingURL=Layer.js.map