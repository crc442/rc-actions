'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconContainer = function (_Component) {
	_inherits(IconContainer, _Component);

	function IconContainer(props) {
		_classCallCheck(this, IconContainer);

		var _this = _possibleConstructorReturn(this, (IconContainer.__proto__ || Object.getPrototypeOf(IconContainer)).call(this, props));

		_this.state = {
			selected: '',
			hover: false
		};
		return _this;
	}

	_createClass(IconContainer, [{
		key: 'clicked',
		value: function clicked(id) {
			this.setState({
				selected: id
			});
			this.props.onUpdate(id);
		}
	}, {
		key: 'hovering',
		value: function hovering(hoverState) {
			this.setState({
				hover: hoverState
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    index = _props.index,
			    img = _props.img,
			    id = _props.id,
			    title = _props.title,
			    show = _props.show;

			var delay = index / 20 + 0.2;

			var divStyles = {
				position: 'relative',
				display: 'inline-block',
				padding: '6px 4px 0px',
				transition: 'transform 0.2s ' + delay + 's cubic-bezier(.76,.26,.28,1.4), opacity 0.1s ' + delay + 's',
				transform: show ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
				opacity: show ? 1 : 0,
				cursor: 'pointer'
			};

			return _react2.default.createElement(
				'li',
				{ style: divStyles,
					onClick: function onClick() {
						return _this2.clicked(id);
					},
					onMouseEnter: function onMouseEnter() {
						return _this2.hovering(true);
					},
					onMouseLeave: function onMouseLeave() {
						return _this2.hovering(false);
					} },
				_react2.default.createElement(_icon2.default, { index: index, link: img, id: id, title: title, hover: this.state.hover })
			);
		}
	}]);

	return IconContainer;
}(_react.Component);

IconContainer.propTypes = {
	show: _react.PropTypes.bool,
	onUpdate: _react.PropTypes.func
};
IconContainer.defaultProps = {
	show: false
};
exports.default = IconContainer;
//# sourceMappingURL=index.js.map