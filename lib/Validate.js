'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _openIam = require('open-iam');

var _openIam2 = _interopRequireDefault(_openIam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidateConstructor = function ValidateConstructor(config) {
  return function (_Component) {
    _inherits(Validate, _Component);

    function Validate() {
      _classCallCheck(this, Validate);

      return _possibleConstructorReturn(this, (Validate.__proto__ || Object.getPrototypeOf(Validate)).apply(this, arguments));
    }

    _createClass(Validate, [{
      key: 'deepMap',
      value: function deepMap(children, deepMapFn) {
        var _this2 = this;

        return _react.Children.map(children, function (child) {
          if (child) {
            if (child.props && child.props.children && _typeof(child.props.children) === 'object') {
              // Clone the child that has children and map them too
              return deepMapFn((0, _react.cloneElement)(child, _extends({}, child.props, {
                children: _this2.deepMap(child.props.children, deepMapFn)
              })));
            }
            return deepMapFn(child);
          } else {
            return child;
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var localIam = config.iam;
        var children = null;

        //if action and resource was tagged to validate then it is applyed to every child nested inside
        if (this.props && this.props.iamAction && this.props.iamResource) {
          //check auth based on the iam doc action and resource to decide if this child content should be displayed.
          if (_openIam2.default.authorize(this.props.iamResource, this.props.iamAction, _openIam2.default.processIamData(localIam))) {
            //set childWithProps to the unaltered children because auth returned true
            children = this.props.children;
          } else {
            //return nothing to display to the dom because authorize returned false
            children = null;
          }
        } else {
          //else validate will loop its children recursively and look for action/resources tagged to any ui element
          children = this.deepMap(this.props.children, function (child) {
            //if this child has action and resource run auth against it
            if (child.props && child.props.iamAction && child.props.iamResource) {
              //either return the child or blank based on iam authorize
              return _openIam2.default.authorize(child.props.iamResource, child.props.iamAction, _openIam2.default.processIamData(localIam)) ? child : '';
            } else {
              //no action or resource so its a normal dom element
              return child;
            }
          });
        }
        return _react2.default.createElement(
          'div',
          { className: 'none', style: {'display':'inline-block'} },
          children
        );
      }
    }]);

    return Validate;
  }(_react.Component);
};

exports.default = ValidateConstructor;