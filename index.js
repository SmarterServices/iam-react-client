"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthorized = exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _openIam = _interopRequireDefault(require("open-iam"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isAuthorized = exports.isAuthorized = function isAuthorized(iamAction, iamResource, localIam) {
  if (_typeof(localIam) === 'object') {
    return _openIam["default"].authorize(iamResource, iamAction, _openIam["default"].processIamData(localIam));
  } else if (typeof localIam === 'string') {
    try {
      return _openIam["default"].authorize(iamResource, iamAction, _openIam["default"].processIamData(JSON.parse(localIam)));
    } catch (err) {
      return false;
    }
  } else {
    console.warn("Please pass a valid iam object or string to use the function 'isAuthorized'");
    return false;
  }
};
var ValidateConstructor = function ValidateConstructor(config) {
  return /*#__PURE__*/function (_Component) {
    function Validate() {
      _classCallCheck(this, Validate);
      return _callSuper(this, Validate, arguments);
    }
    _inherits(Validate, _Component);
    return _createClass(Validate, [{
      key: "deepMap",
      value: function deepMap(children, deepMapFn) {
        var _this = this;
        return _react.Children.map(children, function (child) {
          if (child) {
            if (child.props && child.props.children && _typeof(child.props.children) === 'object') {
              // Clone the child that has children and map them too
              return deepMapFn( /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
                children: _this.deepMap(child.props.children, deepMapFn)
              })));
            }
            return deepMapFn(child);
          } else {
            return child;
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var localIam = config.iam;
        var children = null;

        //if action and resource was tagged to validate then it is applyed to every child nested inside
        if (this.props && this.props.iamAction && this.props.iamResource) {
          //check auth based on the iam doc action and resource to decide if this child content should be displayed.
          if (_openIam["default"].authorize(this.props.iamResource, this.props.iamAction, _openIam["default"].processIamData(localIam))) {
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
              return _openIam["default"].authorize(child.props.iamResource, child.props.iamAction, _openIam["default"].processIamData(localIam)) ? child : '';
            } else {
              //no action or resource so its a normal dom element
              return child;
            }
          });
        }
        return children;
      }
    }]);
  }(_react.Component);
};
var _default = exports["default"] = ValidateConstructor;
