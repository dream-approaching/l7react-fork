"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _l = require("@antv/l7");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _SceneContext = require("./SceneContext");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PopupComponet = function (_React$PureComponent) {
  (0, _inherits2.default)(PopupComponet, _React$PureComponent);

  var _super = _createSuper(PopupComponet);

  function PopupComponet(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PopupComponet);
    _this = _super.call(this, props);
    _this.el = void 0;
    _this.scene = void 0;
    _this.popup = void 0;
    _this.el = document.createElement('div');
    return _this;
  }

  (0, _createClass2.default)(PopupComponet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          lnglat = _this$props.lnglat,
          children = _this$props.children,
          option = _this$props.option;
      var p = new _l.Popup(option);

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
        this.popup = new _l.Popup(this.props.option);
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

      return React.createElement(_SceneContext.SceneContext.Consumer, {}, function (scene) {
        if (scene) {
          _this2.scene = scene;
        }

        return (0, _reactDom.createPortal)(_this2.props.children, _this2.el);
      });
    }
  }]);
  return PopupComponet;
}(React.PureComponent);

exports.default = PopupComponet;
//# sourceMappingURL=Popup.js.map