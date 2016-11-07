'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
	_inherits(Icon, _Component);

	function Icon(props) {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
	}

	_createClass(Icon, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    link = _props.link,
			    width = _props.width,
			    hover = _props.hover;


			var iconStyles = {
				transition: 'all 0.2s',
				transform: hover ? 'translateY(-2px) scale(1.2)' : 'translateY(0px) scale(1)',
				transformOrigin: 'bottom',
				width: width,
				margin: '2px'
			};

			var iconNameStyles = {
				background: 'rgba(0, 0, 0, 0.8)',
				color: 'white',
				padding: '0px 6px',
				fontSize: '10px',
				borderRadius: '12px',
				position: 'absolute',
				top: '-20px',
				left: 'calc(50% - 16px)',
				textAlign: 'center',
				opacity: hover ? 1 : 0,
				transform: hover ? 'translateY(-6px)' : 'translateY(0px)',
				transition: 'all 0.1s'
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'span',
					{ style: iconNameStyles },
					title
				),
				_react2.default.createElement('img', { style: iconStyles, src: link, alt: title })
			);
		}
	}]);

	return Icon;
}(_react.Component);

Icon.propTypes = {
	id: _react.PropTypes.string,
	link: _react.PropTypes.string,
	width: _react.PropTypes.string,
	hover: _react.PropTypes.bool
};
Icon.defaultProps = {
	width: '40px',
	hover: false
};
exports.default = Icon;
//# sourceMappingURL=index.js.map