"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _this = void 0,
    _jsxFileName = "/Users/lizhengxue/Documents/AntV/github/l7-release/L7/packages/react/src/component/Legend/color.tsx";

require('load-styles')("/* @antv/l7-react */\n.color {\n color:'red';\n}\n");

var ColorComponent = React.memo(function (props) {
  var className = props.className,
      style = props.style,
      title = props.title;
  var items = [{
    title: '1',
    color: 'rgb(239,243,255)'
  }, {
    title: '10',
    color: 'rgb(198,219,239)'
  }, {
    title: '30',
    color: 'rgb(158,202,225)'
  }, {
    title: '50',
    color: 'rgb(107,174,214)'
  }, {
    title: '60',
    color: 'rgb(49,130,189)'
  }, {
    title: '100',
    color: 'rgb(8,81,156)'
  }];
  return React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, items.map(function (c, i) {
    return React.createElement("div", {
      key: i.toString(),
      style: {
        background: c.color,
        height: '100%',
        display: 'inline-block',
        cursor: 'pointer',
        width: '' + (100.0 - items.length) / items.length + '%',
        marginRight: '1%',
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    });
  })), React.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, items.map(function (c, i) {
    return React.createElement("div", {
      key: i.toString() + '122',
      style: {
        background: '#fff',
        height: '100%',
        display: 'inline-block',
        textAlign: 'left',
        cursor: 'pointer',
        width: '' + (100.0 - items.length) / items.length + '%',
        marginRight: '1%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, c.title);
  })));
});
exports.ColorComponent = ColorComponent;
//# sourceMappingURL=color.js.map