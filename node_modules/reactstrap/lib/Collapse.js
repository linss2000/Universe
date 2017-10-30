'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = _extends({}, _Transition2.default.propTypes, {
  isOpen: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.node,
  navbar: _propTypes2.default.bool,
  cssModule: _propTypes2.default.object
});

var defaultProps = _extends({}, _Transition2.default.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: _utils.TransitionTimeouts.Collapse
});

function getTransitionClass(status) {
  if (status === _Transition.ENTERING) {
    return 'collapsing';
  } else if (status === _Transition.ENTERED) {
    return 'collapse show';
  } else if (status === _Transition.EXITING) {
    return 'collapsing';
  } else if (status === _Transition.EXITED) {
    return 'collapse';
  }
  return 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse = function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.state = {
      height: null
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_this);
    });
    return _this;
  }

  _createClass(Collapse, [{
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      this.setState({ height: getHeight(node) });
      this.props.onEntering(node, isAppearing);
    }
  }, {
    key: 'onEntered',
    value: function onEntered(node, isAppearing) {
      this.setState({ height: null });
      this.props.onEntered(node, isAppearing);
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ height: getHeight(node) });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
      this.setState({ height: 0 });
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      this.setState({ height: null });
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Tag = _props.tag,
          isOpen = _props.isOpen,
          className = _props.className,
          navbar = _props.navbar,
          cssModule = _props.cssModule,
          children = _props.children,
          transitionProps = _objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children']);

      var otherProps = (0, _utils.omit)(transitionProps, Object.keys(propTypes));
      var height = this.state.height;


      return _react2.default.createElement(
        _Transition2.default,
        _extends({}, transitionProps, {
          'in': isOpen,
          onEntering: this.onEntering,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var collapseClass = getTransitionClass(status);
          var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
          var style = height === null ? null : { height: height };
          return _react2.default.createElement(
            Tag,
            _extends({}, otherProps, {
              style: _extends({}, otherProps.style, style),
              className: classes
            }),
            children
          );
        }
      );
    }
  }]);

  return Collapse;
}(_react.Component);

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
exports.default = Collapse;