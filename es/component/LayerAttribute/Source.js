import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      source = props.source;

  var data = source.data,
      sourceOption = _objectWithoutProperties(source, ["data"]);

  useEffect(function () {
    if (!layer.inited) {
      layer.source(data, sourceOption);
    } else {
      layer.setData(data, sourceOption);
    }

    if (sourceOption.autoFit) {
      layer.fitBounds(sourceOption && sourceOption.fitBoundsOptions);
    }
  }, [data, JSON.stringify(sourceOption)]);
  return null;
});
//# sourceMappingURL=Source.js.map