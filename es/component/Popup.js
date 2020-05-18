import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { Popup } from '@antv/l7';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { SceneContext } from './SceneContext';

var PopupComponet = function (_React$PureComponent) {
  _inherits(PopupComponet, _React$PureComponent);

  var _super = _createSuper(PopupComponet);

  function PopupComponet(props) {
    var _this;

    _classCallCheck(this, PopupComponet);

    _this = _super.call(this, props);
    _this.el = void 0;
    _this.scene = void 0;
    _this.popup = void 0;
    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(PopupComponet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          lnglat = _this$props.lnglat,
          children = _this$props.children,
          option = _this$props.option;
      var p = new Popup(option);

      if (lnglat) {
        p.setLnglat(lnglat);
      }

      if (children) {
        p.setDOMContent(this.el);
      }

      this.popup = p;
      this.scene.addPopup(p);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _prevProps$lnglat, _this$props2, _this$props2$lnglat;

      var positionChanged = (prevProps === null || prevProps === void 0 ? void 0 : (_prevProps$lnglat = prevProps.lnglat) === null || _prevProps$lnglat === void 0 ? void 0 : _prevProps$lnglat.toString()) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$lnglat = _this$props2.lnglat) === null || _this$props2$lnglat === void 0 ? void 0 : _this$props2$lnglat.toString());

      if (positionChanged) {
        this.popup.remove();
        this.popup = new Popup(this.props.option);
        this.popup.setLnglat(this.props.lnglat);
        this.popup.setDOMContent(this.el);
        this.scene.addPopup(this.popup);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.popup.remove();
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

  return PopupComponet;
}(React.PureComponent);

export { PopupComponet as default };
//# sourceMappingURL=Popup.js.map