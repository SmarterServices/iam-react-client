'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _openIam = require('open-iam');

var _openIam2 = _interopRequireDefault(_openIam);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactChildrenUtilities = require('react-children-utilities');

var _reactChildrenUtilities2 = _interopRequireDefault(_reactChildrenUtilities);

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
      key: 'render',
      value: function render() {
        var localIam = _lodash2.default.cloneDeep(config.iam);
        var children = null;

        //if action and resource was tagged to validate then it is applyed to every child nested inside
        if (this.props.iamAction && this.props.iamResource) {
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
          children = _reactChildrenUtilities2.default.deepMap(this.props.children, function (child) {
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
          { className: 'none' },
          children
        );
      }
    }]);

    return Validate;
  }(_react.Component);
};

exports.default = ValidateConstructor;
