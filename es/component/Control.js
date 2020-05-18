import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { Logo, Scale, Zoom } from '@antv/l7';
import React, { useEffect, useState } from 'react';
import { useSceneValue } from './SceneContext';
export default React.memo(function MapControl(props) {
  var scene = useSceneValue();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      setControl = _useState2[1];

  var type = props.type,
      position = props.position;
  useEffect(function () {
    var ctr;

    switch (type) {
      case 'scale':
        ctr = new Scale({
          position: position || 'bottomright'
        });
        break;

      case 'zoom':
        ctr = new Zoom({
          position: position || 'topright'
        });
        break;

      case 'logo':
        ctr = new Logo({
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
//# sourceMappingURL=Control.js.map