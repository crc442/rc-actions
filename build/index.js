'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

var _iconContainer = require('./components/iconContainer');

var _iconContainer2 = _interopRequireDefault(_iconContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reactions = function (_Component) {
	_inherits(Reactions, _Component);

	function Reactions(props) {
		_classCallCheck(this, Reactions);

		var _this = _possibleConstructorReturn(this, (Reactions.__proto__ || Object.getPrototypeOf(Reactions)).call(this, props));

		_this.state = {
			open: false
		};
		return _this;
	}

	_createClass(Reactions, [{
		key: 'toggleOpen',
		value: function toggleOpen(openState) {
			this.setState({
				open: openState
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var open = this.state.open;

			var items = this.props.items;
			var width = items.length * 52;

			var optionsStyles = {
				position: 'relative'
			};

			var elementsStyles = {
				listStyle: 'none',
				padding: 0,
				margin: 'auto',
				background: '#FFF',
				boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)',
				borderRadius: '30px',
				visibility: open ? 'visible' : 'hidden',
				opacity: open ? 1 : 0,
				transition: 'all 0.2s 0.2s',
				display: 'inline-block',
				position: 'absolute',
				width: width + 'px',
				left: 0,
				bottom: 'calc( 100% + 4px )',
				zIndex: '9999'
			};

			var listItems = items.map(function (item, i) {
				return _react2.default.createElement(_iconContainer2.default, { key: item.id, onUpdate: _this2.props.onUpdate,
					id: item.id, index: i, img: item.img, title: item.description, show: open });
			});

			return _react2.default.createElement(
				'span',
				{ style: optionsStyles,
					onMouseEnter: function onMouseEnter() {
						return _this2.toggleOpen(true);
					},
					onMouseLeave: function onMouseLeave() {
						return _this2.toggleOpen(false);
					} },
				_react2.default.createElement(
					'ul',
					{ style: elementsStyles },
					listItems
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.children
				)
			);
		}
	}]);

	return Reactions;
}(_react.Component);

Reactions.propTypes = {
	items: _react.PropTypes.array.isRequired
};
exports.default = Reactions;
//# sourceMappingURL=index.js.map