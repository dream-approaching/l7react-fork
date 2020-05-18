import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { Scene } from '@antv/l7';
import React, { createElement, createRef, useEffect, useState } from 'react';
import { SceneContext } from './SceneContext';
export default React.memo(function (props) {
  var style = props.style,
      className = props.className,
      map = props.map;
  var container = createRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      scene = _useState2[0],
      setScene = _useState2[1];

  useEffect(function () {
    var sceneInstance = new Scene({
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
  return React.createElement(SceneContext.Provider, {
    value: scene
  }, createElement('div', {
    ref: container,
    style: style,
    className: className
  }, scene && props.children));
});
//# sourceMappingURL=Scene.js.map