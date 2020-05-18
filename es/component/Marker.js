import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { Marker } from '@antv/l7';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { SceneContext } from './SceneContext';

var MarkerComponet = function (_React$PureComponent) {
  _inherits(MarkerComponet, _React$PureComponent);

  var _super = _createSuper(MarkerComponet);

  function MarkerComponet(props) {
    var _this;

    _classCallCheck(this, MarkerComponet);

    _this = _super.call(this, props);
    _this.el = void 0;
    _this.scene = void 0;
    _this.marker = void 0;
    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(MarkerComponet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          lnglat = _this$props.lnglat,
          children = _this$props.children,
          option = _this$props.option,
          onMarkerLoaded = _this$props.onMarkerLoaded;
      var marker = new Marker(option);

      if (lnglat) {
        marker.setLnglat(lnglat);
      }

      if (children) {
        marker.setElement(this.el);
      }

      this.marker = marker;

      if (onMarkerLoaded) {
        onMarkerLoaded(marker);
      }

      this.scene.addMarker(marker);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2;

      var positionChanged = (prevProps === null || prevProps === void 0 ? void 0 : prevProps.lnglat.toString()) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.lnglat.toString());

      if (positionChanged) {
        this.marker.setLnglat(this.props.lnglat);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.marker) {
        this.marker.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(SceneContext.Consumer, {}, function (scene) {
        if (scene) {
          _this2.scene = scene;
        }

        return createPortal(_this2.props.children, _this2.el);
      });
    }
  }]);

  return MarkerComponet;
}(React.PureComponent);

export { MarkerComponet as default };
//# sourceMappingURL=Marker.js.map