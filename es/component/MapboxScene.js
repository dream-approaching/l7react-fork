import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { Scene } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import React, { createElement, createRef, useEffect, useState } from 'react';
import { SceneContext } from './SceneContext';
var MapboxScene = React.memo(function (props) {
  var style = props.style,
      className = props.className,
      map = props.map,
      option = props.option,
      onSceneLoaded = props.onSceneLoaded;
  var container = createRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      scene = _useState2[0],
      setScene = _useState2[1];

  useEffect(function () {
    var sceneInstance = new Scene(_objectSpread({
      id: container.current
    }, option, {
      map: new Mapbox(map)
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
  useEffect(function () {
    if (scene && map.style) {
      scene.setMapStyle(map.style);
    }
  }, [JSON.stringify(map.style)]);
  useEffect(function () {
    if (scene && map.zoom) {
      scene.setZoom(map.zoom);
    }
  }, [map.zoom]);
  useEffect(function () {
    if (scene && map.center) {
      scene.setCenter(map.center);
    }
  }, [JSON.stringify(map.center)]);
  useEffect(function () {
    if (scene && map.pitch) {
      scene.setPitch(map.pitch);
    }
  }, [map.pitch]);
  useEffect(function () {
    if (scene && map.rotation) {
      scene.setRotation(map.rotation);
    }
  }, [map.rotation]);
  return React.createElement(SceneContext.Provider, {
    value: scene
  }, createElement('div', {
    ref: container,
    style: style,
    className: className
  }, scene && props.children));
});
export default MapboxScene;
//# sourceMappingURL=MapboxScene.js.map