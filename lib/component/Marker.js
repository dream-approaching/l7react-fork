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

var MarkerComponet = function (_React$PureComponent) {
  (0, _inherits2.default)(MarkerComponet, _React$PureComponent);

  var _super = _createSuper(MarkerComponet);

  function MarkerComponet(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MarkerComponet);
    _this = _super.call(this, props);
    _this.el = void 0;
    _this.scene = void 0;
    _this.marker = void 0;
    _this.el = document.createElement('div');
    return _this;
  }

  (0, _createClass2.default)(MarkerComponet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          lnglat = _this$props.lnglat,
          children = _this$props.children,
          option = _this$props.option,
          onMarkerLoaded = _this$props.onMarkerLoaded;
      var marker = new _l.Marker(option);

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

      return React.createElement(_SceneContext.SceneContext.Consumer, {}, function (scene) {
        if (scene) {
          _this2.scene = scene;
        }

        return (0, _reactDom.createPortal)(_this2.props.children, _this2.el);
      });
    }
  }]);
  return MarkerComponet;
}(React.PureComponent);

exports.default = MarkerComponet;
//# sourceMappingURL=Marker.js.map