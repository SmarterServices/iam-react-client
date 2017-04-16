'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Validate = require('./Validate');

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testIam = {
  "Statement": [{
    "Effect": "Allow",
    "Action": ["CanRead"],
    "Resource": ["ssrn:ss:iam:::account/100/assestmentgroup/*/customquestions"]
  }, {
    "Effect": "Allow",
    "Action": ["CanUpdate", "CanDelete", "CanCreate"],
    "Resource": "ssrn:ss:iam:::account/100/assestmentgroup/1/customquestions"
  }, {
    "Effect": "Deny",
    "Action": ["CanUpdate"],
    "Resource": ["ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions"]
  }]
};
var Validate = new _Validate2.default({ iam: testIam,
  hash: '71f6fecdccfb029646d684255290a38ef99cb9e5fa21c03445b1b4c1bd102581' });

var Test = function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          Validate,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              { iamAction: 'CanUpdate', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
              'This is nested and should hide'
            ),
            _react2.default.createElement(
              'p',
              { iamAction: 'CanRead', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
              'This is nested and should show'
            )
          ),
          _react2.default.createElement(
            'p',
            { iamAction: 'CanRead', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
            'This should show'
          ),
          _react2.default.createElement(
            'p',
            { iamAction: 'CanUpdate', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
            'This should hide'
          ),
          _react2.default.createElement(
            'select',
            null,
            _react2.default.createElement(
              'option',
              { iamAction: 'CanRead', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
              'This should show'
            ),
            _react2.default.createElement(
              'option',
              { iamAction: 'CanUpdate', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
              'This should hide'
            )
          )
        ),
        _react2.default.createElement(
          Validate,
          { iamAction: 'CanRead', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
          _react2.default.createElement(
            'p',
            null,
            ' This should show and is nested in validate that has action and resourse'
          )
        ),
        _react2.default.createElement(
          Validate,
          { iamAction: 'CanUpdate', iamResource: 'ssrn:ss:iam:::account/100/assestmentgroup/2/customquestions' },
          _react2.default.createElement(
            'p',
            null,
            ' This should hide and is nested in validate that has action and resourse'
          )
        )
      );
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;